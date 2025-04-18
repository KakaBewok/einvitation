<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Theme;
use App\Models\Invitation;
use App\Models\ParentModel;
use App\Models\Rsvp;
use App\Models\Image;
use App\Models\Story;
use App\Models\Rundown;
use App\Models\Guest;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create roles
        $free = Role::create(['name' => 'free']);
        $basic = Role::create(['name' => 'basic']);
        $pro = Role::create(['name' => 'pro']);

        // create permissions 
        Permission::create(['name' => 'create invitation']);
        Permission::create(['name' => 'view analytics']);
        Permission::create(['name' => 'use premium themes']);

        // Assign permissions to roles
        $free->givePermissionTo('create invitation');
        $basic->givePermissionTo(['create invitation', 'view analytics']);
        $pro->givePermissionTo(['create invitation', 'view analytics', 'use premium themes']);

        // Manual user
        $superAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'super.admin@gmail.com',
            'password' => Hash::make('superadmin123'),
            'package' => 'pro',
        ]);
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('cincayocoyuli'),
            'package' => 'pro',
        ]);
        $zaynMalik = User::create([
            'name' => 'Zayn Malik',
            'email' => 'zayn.malik@gmail.com',
            'password' => Hash::make('zaynmalik123'),
            'package' => 'free',
        ]);
        $harryStyles = User::create([
            'name' => 'Harry Styles',
            'email' => 'harry.styles@gmail.com',
            'password' => Hash::make('harrystyles123'),
            'package' => 'basic',
        ]);
        $coyuli = User::create([
            'name' => 'Coyuli',
            'email' => 'coyuli@gmail.com',
            'password' => Hash::make('coyuli123'),
            'package' => 'pro',
        ]);

        // Assign roles
        $zaynMalik->assignRole('free');
        $harryStyles->assignRole('basic');
        $coyuli->assignRole('pro');
        $admin->assignRole('pro');
        $superAdmin->assignRole('pro');

        // Factory models
        Theme::factory(3)->create();
        Invitation::factory(6)->recycle([
            User::all(),
            Theme::all(),
        ])->create();

        Guest::factory(60)->recycle([
            Invitation::all(),
        ])->create();
        Rundown::factory(12)->recycle([
            Invitation::all(),
        ])->create();
        Story::factory(30)->recycle([
            Invitation::all(),
        ])->create();
        Image::factory(30)->recycle([
            Invitation::all(),
        ])->create();
        Rsvp::factory(30)->recycle([
            Invitation::all(),
        ])->create();
        ParentModel::factory(24)->recycle([
            Invitation::all(),
        ])->create();
    }
}
