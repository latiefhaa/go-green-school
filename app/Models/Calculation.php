<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Calculation extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_name',
        'items',
        'total_value',
        'co2_reduction',
    ];

    protected function casts(): array
    {
        return [
            'items' => 'array',
            'total_value' => 'decimal:2',
            'co2_reduction' => 'decimal:4',
        ];
    }
}
