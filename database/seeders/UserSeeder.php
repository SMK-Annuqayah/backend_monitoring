<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'siswa',
            'email' => 'siswa@gmail.com',
            'no_hp' => '79079070s',
            'level' => '0',
            'status' => '1',
            'password' => Hash::make('12345'),
        ]);
        User::create([
            'name' => 'wali',
            'email' => 'wali@gmail.com',
            'no_hp' => '79079070s',
            'level' => '1',
            'status' => '1',
            'password' => Hash::make('12345'),
        ]);
        User::create([
            'name' => 'pembimbing',
            'email' => 'pembimbing@gmail.com',
            'no_hp' => '79079070s',
            'level' => '2',
            'status' => '1',
            'password' => Hash::make('12345'),
        ]);
        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'no_hp' => '79079070s',
            'level' => '3',
            'status' => '1',
            'password' => Hash::make('12345'),
        ]);
    }
}
