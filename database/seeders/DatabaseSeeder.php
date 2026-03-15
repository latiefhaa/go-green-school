<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'admin@gogreenschool.id'],
            ['name' => 'Admin Go Green', 'password' => bcrypt('password')]
        );

        $this->call(GoGreenSeeder::class);
    }
}
