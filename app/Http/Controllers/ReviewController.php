<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $reviews = Review::where('book_id', $request['id'])->with('user')->get();

        return response()->json($reviews);
    }
}