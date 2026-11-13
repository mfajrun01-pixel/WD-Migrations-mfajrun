//
if (document.getElementById("v-home")) {
    alert("welcome to home page my friend");
}

const toggleOpen = document.getElementById('toggleOpen');
const toggleClose = document.getElementById('toggleClose');
const menu = document.getElementById('collapseMenu');

let lastFocusedElement = null;

function openMenu() {
    lastFocusedElement = document.activeElement;
    menu
        .classList
        .remove('hidden');
    toggleOpen.setAttribute('aria-expanded', 'true');

    // Move focus into menu
    menu.focus();
}

function closeMenu() {
    menu
        .classList
        .add('hidden');
    toggleOpen.setAttribute('aria-expanded', 'false');

    // Restore focus
    lastFocusedElement
        ?.focus();
}

toggleOpen.addEventListener('click', openMenu);
toggleClose.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
        closeMenu();
    }
});

// ==========================================================
// CONTACT FORM LOGIC & INTERACTIVITY
// ==========================================================
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const pesanInput = document.getElementById('pesan');
    const charCount = document.getElementById('charCount');

    const alertSuccess = document.getElementById('alertSuccess');
    const alertError = document.getElementById('alertError');
    const alertMessage = document.getElementById('alertMessage');
    const alertErrorMessage = document.getElementById('alertErrorMessage');

    const closeSuccessAlert = document.getElementById('closeSuccessAlert');
    const closeErrorAlert = document.getElementById('closeErrorAlert');

    // 1. Hitung karakter pesan (real-time)
    if (pesanInput && charCount) {
        pesanInput.addEventListener('input', function () {
            // Batasi maksimal 500 karakter
            if (this.value.length > 500) {
                this.value = this.value.substring(0, 500);
            }

            charCount.textContent = this.value.length;

            // Ubah warna indikator jika mendekati batas
            if (this.value.length >= 450) {
                charCount.classList.add('text-amber-400', 'font-bold');
            } else {
                charCount.classList.remove('text-amber-400', 'font-bold');
            }
        });
    }

    // 2. Tombol tutup alert manual
    if (closeSuccessAlert && alertSuccess) {
        closeSuccessAlert.addEventListener('click', function () {
            alertSuccess.classList.add('hidden');
        });
    }

    if (closeErrorAlert && alertError) {
        closeErrorAlert.addEventListener('click', function () {
            alertError.classList.add('hidden');
        });
    }

    // 3. Validasi form + kirim ke Laravel
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const nama = document.getElementById('nama');
            const email = document.getElementById('email');
            const pesan = document.getElementById('pesan');
            const submitBtn = document.getElementById('submitBtn');

            const errorNama = document.getElementById('errorNama');
            const errorEmail = document.getElementById('errorEmail');
            const errorPesan = document.getElementById('errorPesan');

            let isValid = true;

            alertSuccess.classList.add('hidden');
            alertError.classList.add('hidden');

            // Validasi nama (minimal 3 karakter)
            if (nama.value.trim().length < 3) {
                errorNama.classList.remove('hidden');
                nama.classList.add('border-rose-500');
                isValid = false;
            } else {
                errorNama.classList.add('hidden');
                nama.classList.remove('border-rose-500');
            }

            // Validasi format email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                errorEmail.classList.remove('hidden');
                email.classList.add('border-rose-500');
                isValid = false;
            } else {
                errorEmail.classList.add('hidden');
                email.classList.remove('border-rose-500');
            }

            // Validasi pesan (minimal 10 karakter)
            if (pesan.value.trim().length < 10) {
                errorPesan.classList.remove('hidden');
                pesan.classList.add('border-rose-500');
                isValid = false;
            } else {
                errorPesan.classList.add('hidden');
                pesan.classList.remove('border-rose-500');
            }

            // Jika validasi gagal
            if (!isValid) {
                alertErrorMessage.textContent = "Mohon periksa kembali input form Anda yang belum sesuai.";
                alertError.classList.remove('hidden');
                window.scrollTo({ top: 150, behavior: 'smooth' });
                return;
            }

            // Kirim ke Laravel (ContactController@store)
            const namaTersimpan = nama.value; // disimpan dulu karena form akan di-reset
            if (submitBtn) submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: new FormData(contactForm), // sudah termasuk _token dari @csrf
                });

                const data = await response.json();

                if (response.ok) {
                    alertMessage.textContent = `Terima kasih, ${namaTersimpan}! Pesan Anda berhasil dikirim dan akan segera saya respons.`;
                    alertSuccess.classList.remove('hidden');
                    alertError.classList.add('hidden');

                    contactForm.reset();
                    if (charCount) charCount.textContent = '0';
                } else {
                    // Error validasi dari server (status 422)
                    alertErrorMessage.textContent =
                        Object.values(data.errors || {}).flat()[0] || 'Terjadi kesalahan saat mengirim pesan.';
                    alertError.classList.remove('hidden');
                }
            } catch (err) {
                alertErrorMessage.textContent = 'Gagal terhubung ke server. Coba lagi nanti.';
                alertError.classList.remove('hidden');
            } finally {
                if (submitBtn) submitBtn.disabled = false;
                window.scrollTo({ top: 150, behavior: 'smooth' });
            }
        });
    }

    // 4. Tombol reset form
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn && contactForm) {
        resetBtn.addEventListener('click', function () {
            document.querySelectorAll('[id^="error"]').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.custom-input').forEach(el => el.classList.remove('border-rose-500'));
            alertSuccess.classList.add('hidden');
            alertError.classList.add('hidden');
            if (charCount) charCount.textContent = '0';
        });
    }
});