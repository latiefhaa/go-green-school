<?php

use App\Http\Controllers\Api\CalculatorController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ProgramController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // Programs
    Route::get('/programs', [ProgramController::class, 'index']);
    Route::get('/programs/{slug}', [ProgramController::class, 'show']);

    // Calculator Bank Sampah
    Route::get('/calculator/prices', [CalculatorController::class, 'getPrices']);
    Route::post('/calculator', [CalculatorController::class, 'calculate']);
    Route::get('/calculator/history', [CalculatorController::class, 'history']);

    // Posts / Edukasi
    Route::get('/posts', [PostController::class, 'index']);
    Route::get('/posts/{id}', [PostController::class, 'show']);
});
