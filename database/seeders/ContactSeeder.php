<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            ['Andi Pratama', 'andi@example.com', 'Tanya proyek', 'Halo, saya tertarik dengan layanan pembuatan website Anda.'],
            ['Budi Santoso', 'budi@example.com', 'Kolaborasi', 'Apakah Anda terbuka untuk kerja sama proyek aplikasi?'],
            ['Citra Lestari', 'citra@example.com', 'Penawaran desain', 'Saya butuh desain UI untuk aplikasi toko online.'],
            ['Dewi Anggraini', 'dewi@example.com', null, 'Portofolio Anda bagus, boleh minta CV lengkapnya?'],
            ['Eko Wijaya', 'eko@example.com', 'Jadwal meeting', 'Bisakah kita atur pertemuan minggu depan untuk diskusi?'],
            ['Fitri Handayani', 'fitri@example.com', 'Tanya harga', 'Berapa estimasi biaya untuk website company profile?'],
            ['Gilang Ramadhan', 'gilang@example.com', 'Laporan bug', 'Tombol kirim di halaman contact tidak merespons.'],
            ['Hana Putri', 'hana@example.com', null, 'Terima kasih, website-nya sangat membantu.'],
            ['Indra Kusuma', 'indra@example.com', 'Magang', 'Apakah ada lowongan magang di bidang web development?'],
            ['Joko Susilo', 'joko@example.com', 'Konsultasi', 'Saya ingin konsultasi soal pemilihan framework untuk proyek kampus.'],
        ];

        foreach ($data as [$nama, $email, $subjek, $pesan]) {
            Contact::create([
                'nama'   => $nama,
                'email'  => $email,
                'subjek' => $subjek,
                'pesan'  => $pesan,
            ]);
        }
    }
}