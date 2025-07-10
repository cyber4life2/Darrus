<?php


use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Student\CourseController;
use App\Http\Controllers\Student\StudentController;
use App\Http\Controllers\Student\StudentProfileController;

// use App\Http\Controllers\Student\StudentController;



Route::middleware(['auth', 'verified','role:student'])->group(function () {
    Route::get('dashboard', [StudentController::class, 'index'])->name('dashboard');
    Route::get('courses', function () { return Inertia::render('Student/course');})->name('courses.index');
    Route::get('payment', function () { return Inertia::render('Student/payment');})->name('payments.index');
 

    Route::get('/profile', [StudentProfileController::class, 'EditProfile'])->name('profile.index');
    Route::patch('/profile', [StudentProfileController::class, 'UpdateStudentProfile'])->name('studentprofile.update');
    Route::put('/student/password', [StudentProfileController::class, 'UpdateStudentPassword'])->name('studentpassword.update');

});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
