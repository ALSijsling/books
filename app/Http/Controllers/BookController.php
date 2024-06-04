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

    public function show(Request $book)
    {
        $book = Book::where('id', $book['id'])->with('author')->get();
        return response()->json($book[0]);
    }

    public function store(Request $request)
    {
        $attributes['author_id'] = $request[1]['author'];
        $attributes['title'] = $request[0]['title'];
        $attributes['slug'] = Str::slug($attributes['title']);

        Book::create($attributes);
    }

    public function update(Request $request)
    {
        $book = Book::find($request[0]['id']);
        
        $book->author_id = $request[1]['author'];
        $book->title = $request[0]['title'];
        $book->slug = Str::slug($book['title']);

        $book->save();
    }
}
