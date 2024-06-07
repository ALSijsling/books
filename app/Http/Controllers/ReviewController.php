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

    public function show(Request $review)
    {
        $review = Review::where('id', $review['id'])->with('book')->get();
        return response()->json($review[0]);
    }

    public function store(Request $request)
    {
        $attributes['book_id'] = $request[1];
        $attributes['user_id'] = random_int(1, 10);
        $attributes['content'] = $request[0]['content'];

        Review::create($attributes);
    }

    public function update(Request $request)
    {
        $review = Review::find($request[0]['id']);

        $review->content = $request[0]['content'];

        $review->save();
    }
}