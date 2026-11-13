<?php

namespace Database\Seeders;

use App\Models\About;
use Illuminate\Database\Seeder;

class AboutSeeder extends Seeder
{
    public function run(): void
    {
        
        $data = [
            ['fajrun', 20, 'mahasiswa'],
            ['Rina Sari', 21, 'UI/UX Designer'],
            ['Dimas Prakoso', 23, 'Frontend Developer'],
            ['Salsabila', 22, 'Backend Developer'],
            ['Reza Maulana', 24, 'Data Analyst'],
            ['Nadia Putri', 20, 'Mahasiswa'],
            ['Bayu Aditya', 26, 'Mobile Developer'],
            ['Laras Wati', 25, 'Project Manager'],
            ['Farhan Hakim', 27, 'DevOps Engineer'],
            ['Maya Anggun', 23, 'Quality Assurance'],
        ];

        foreach ($data as [$nama, $umur, $posisi]) {
            About::create([
                'nama'   => $nama,
                'umur'   => $umur,
                'posisi' => $posisi,
            ]);
        }
    }
}