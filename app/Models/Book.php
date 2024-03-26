<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Book extends Model
{
    use HasFactory;

    public function author(): HasOne {
        return $this->hasOne(Author::class);
    }

    public function reviews(): HasMany {
        return $this->hasMany(Review::class);
    }
}
