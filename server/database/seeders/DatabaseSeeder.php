<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
        ContactMessageSeeder::class,
        PatientSeeder::class,
        ServiceSeeder::class,
        AppointmentSeeder::class,
        TeamMemberSeeder::class,
        ]);
    }
}
