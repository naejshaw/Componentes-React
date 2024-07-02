<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CloneController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [SiteController::class, 'index'])->name('site.index');
Route::get('/booking', [SiteController::class, 'booking'])->name('site.booking');
Route::get('/calculator', [SiteController::class, 'calculator'])->name('site.calculator');
Route::get('/cms', [SiteController::class, 'cms'])->name('site.cms');
Route::get('/crud', [SiteController::class, 'crud'])->name('site.crud');
Route::get('/dashboard', [SiteController::class, 'dashboard'])->name('site.dashboard');
Route::get('/delivery', [SiteController::class, 'delivery'])->name('site.delivery');
Route::get('/ecommerce', [SiteController::class, 'ecommerce'])->name('site.ecommerce');
Route::get('/gallery', [SiteController::class, 'gallery'])->name('site.gallery');
Route::get('/playlist', [SiteController::class, 'playlist'])->name('site.playlist');
Route::get('/portfolio', [SiteController::class, 'portfolio'])->name('site.portfolio');
Route::get('/quiz', [SiteController::class, 'quiz'])->name('site.quiz');
Route::get('/ranking', [SiteController::class, 'ranking'])->name('site.ranking');
Route::get('/schedule', [SiteController::class, 'schedule'])->name('site.schedule');
Route::get('/siteapi', [SiteController::class, 'siteapi'])->name('site.siteapi');
Route::get('/social', [SiteController::class, 'socialmedia'])->name('site.socialmedia');
Route::get('/tictactoe', [SiteController::class, 'tictactoe'])->name('site.tictactoe');
Route::get('/weather', [SiteController::class, 'weather'])->name('site.weather');

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});
Route::prefix('/blog')->group(function () {
    Route::get('/', [BlogController::class, 'index'])->name('blog.index');
    Route::get('/content', [BlogController::class, 'content'])->name('blog.content');
});
Route::prefix('/clone')->group(function () {
    Route::get('/', [CloneController::class, 'index'])->name('clone.index');
    Route::get('/discord', [CloneController::class, 'discord'])->name('clone.discord');
    Route::get('/hbo', [CloneController::class, 'hbo'])->name('clone.hbo');
    Route::get('/youtube', [CloneController::class, 'youtube'])->name('clone.youtube');
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
