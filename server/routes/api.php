<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ContactMessageController;

Route::post('/contact', [ContactMessageController::class, 'store']);
