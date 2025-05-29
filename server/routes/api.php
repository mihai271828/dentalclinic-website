<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ContactMessageController;
use App\Http\Controllers\Api\TeamMemberController;


Route::post('/contact', [ContactMessageController::class, 'store']);
Route::get('team-members', [TeamMemberController::class, 'index']);
Route::get('team-member-ids', function() {
    return TeamMember::pluck('id');
});
Route::get('reviews', [App\Http\Controllers\Api\ReviewController::class, 'index']);
Route::post('reviews', [App\Http\Controllers\Api\ReviewController::class, 'store']);
