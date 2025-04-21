<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\InvitationController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('dashboard');
        })->name('dashboard');

        Route::middleware('can:manage invitations')->group(function () {
            Route::resource('invitations', InvitationController::class);
            Route::post('/invitations/destroy-bulk', [InvitationController::class, 'destroy_bulk'])->name("invitation.destroy-bulk");
        });
    });
});

// Test route for public invitation
Route::get('/invitations/{slug}', [InvitationController::class, 'public_show'])->name('invitations.public.show');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
