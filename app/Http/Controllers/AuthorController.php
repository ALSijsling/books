<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();
        return response()->json($authors);
    }

    public function store(Request $request)
    {
        $attributes['name'] = $request[0]['name'];
        $attributes['slug'] = Str::slug($attributes['name']);

        Author::create($attributes);
    }
}
