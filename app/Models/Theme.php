<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'preview_image',
        'is_active',
        'description',
    ];

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }
}
