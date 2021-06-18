<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $guard = 'brand';

    protected $fillable = [
        'name','ordering','slug','is_active'
    ];
}
