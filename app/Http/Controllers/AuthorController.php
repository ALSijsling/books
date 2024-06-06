<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::orderBy('name')->get();
        return response()->json($authors);
    }

    public function show(Request $author)
    {
        $author = Author::where('id', $author['id'])->get();
        return response()->json($author[0]);
    }

    public function store(Request $request)
    {
        $attributes['name'] = $request[0]['name'];
        $attributes['slug'] = Str::slug($attributes['name']);

        Author::create($attributes);
    }
}
