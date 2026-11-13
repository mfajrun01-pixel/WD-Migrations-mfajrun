<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            ['01', 'End-to-end development', 'Fullstack Development', 'Membangun aplikasi dari antarmuka hingga backend, dengan alur yang terhubung dan pengalaman yang konsisten.', ['Java', 'PHP', 'Laravel', 'JavaScript'], '</>'],
            ['02', 'Interface development', 'Frontend Development', 'Mengubah desain menjadi halaman web responsif yang mudah digunakan di berbagai ukuran layar.', ['JavaScript', 'HTML', 'CSS'], 'UI'],
            ['03', 'Design & usability', 'UI/UX Design', 'Merancang tampilan yang rapi dan alur interaksi yang jelas, dengan fokus pada kebutuhan pengguna.', ['User flow', 'Wireframe', 'Interface'], 'UX'],
            ['04', 'Server-side development', 'Backend Development', 'Membuat logika aplikasi, API, dan pengelolaan data yang aman serta mudah dikembangkan.', ['PHP', 'Laravel', 'REST API'], 'API'],
            ['05', 'Data management', 'Database Design', 'Merancang struktur tabel dan relasi data agar efisien, rapi, dan mudah dirawat.', ['MySQL', 'SQLite', 'Migration'], 'DB'],
            ['06', 'Mobile development', 'Mobile App Development', 'Membangun aplikasi mobile yang ringan dengan pengalaman pengguna yang nyaman.', ['Kotlin', 'Flutter', 'Firebase'], 'APP'],
            ['07', 'Quality assurance', 'Software Testing', 'Menguji aplikasi secara menyeluruh agar bebas bug sebelum dirilis ke pengguna.', ['PHPUnit', 'Postman', 'Pest'], 'QA'],
            ['08', 'Version control', 'Git & Collaboration', 'Mengelola kode bersama tim dengan riwayat perubahan yang jelas dan terstruktur.', ['Git', 'GitHub', 'Branching'], 'GIT'],
            ['09', 'Deployment', 'Hosting & Deployment', 'Menyiapkan aplikasi agar bisa diakses online dengan konfigurasi server yang stabil.', ['Linux', 'Nginx', 'Cloud'], 'WEB'],
            ['10', 'Security', 'Web Security', 'Melindungi aplikasi dari celah umum seperti SQL injection, XSS, dan CSRF.', ['Validation', 'Auth', 'Encryption'], 'SEC'],
        ];

        foreach ($data as [$number, $category, $title, $description, $tools, $symbol]) {
            Blog::create([
                'number'      => $number,
                'category'    => $category,
                'title'       => $title,
                'description' => $description,
                'tools'       => $tools,
                'symbol'      => $symbol,
            ]);
        }
    }
}