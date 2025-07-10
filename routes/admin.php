<?php



use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;


Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
