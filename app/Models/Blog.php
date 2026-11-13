<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
protected $fillable = [
    'profile_id',
    'number',
    'category',
    'title',
    'description',
    'tools',
    'symbol'
];

protected $casts = ['tools' => 'array'];


}
