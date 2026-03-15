<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'title_en',
        'content',
        'content_en',
        'category',
        'image',
        'author',
        'subjects',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'subjects' => 'array',
            'is_published' => 'boolean',
        ];
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }
}
