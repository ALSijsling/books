<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Book extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    public function author(): BelongsTo {
        return $this->belongsTo(Author::class);
    }

    public function reviews(): HasMany {
        return $this->hasMany(Review::class);
    }
}
