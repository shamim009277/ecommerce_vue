<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $guard = 'category';

    protected $fillable = [
        'name','parent_id','ordering','slug','is_active'
    ];
}
