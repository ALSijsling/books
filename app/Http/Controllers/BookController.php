<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with('author')->orderBy('updated_at', 'desc')->get();
        return response()->json($books);
    }

    public function store(Request $request)
    {
        $attributes['author_id'] = $request[1]['author'];
        $attributes['title'] = $request[0]['title'];
        $attributes['slug'] = Str::slug($attributes['title']);

        Book::create($attributes);
    }
}
