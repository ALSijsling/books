<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/books', [BookController::class, 'index']);
Route::get('/books/{id}', [BookController::class, 'show']);
Route::get('/authors', [AuthorController::class, 'index']);
Route::get('/authors/{id}', [AuthorController::class, 'show']);
Route::get('/books/{id}/reviews', [ReviewController::class, 'index']);

Route::post('/books', [BookController::class, 'store']);
Route::patch('/books', [BookController::class, 'update']);
Route::delete('/books', [BookController::class, 'destroy']);

Route::post('/authors', [AuthorController::class, 'store']);
Route::patch('/authors', [AuthorController::class, 'update']);
Route::delete('/authors', [AuthorController::class, 'destroy']);