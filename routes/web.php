<?php

use Inertia\Inertia;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Site\SiteController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::get('/programs', [SiteController::class, 'programs'])->name('site.programs');
Route::get('/about', [SiteController::class, 'about'])->name('site.about');
Route::get('/contact', [SiteController::class, 'contact'])->name('site.contact');
Route::get('/resource', [SiteController::class, 'resource'])->name('site.resource');



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
