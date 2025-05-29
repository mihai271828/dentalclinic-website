<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    // 1. Returnează toate recenziile (ex: pentru a le afișa)
    public function index()
    {
        return Review::orderBy('created_at','desc')->get();
    }

    // 2. Primește o nouă recenzie și o salvează
    public function store(Request $request)
    {
        $data = $request->validate([
            'author'  => 'nullable|string|max:100',
            'rating'  => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
        ]);

        $review = Review::create($data);
        return response()->json($review, 201);
    }
}
