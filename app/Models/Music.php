<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
    /** @use HasFactory<\Database\Factories\MusicFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'artist',
        'url',
    ];

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }
}
