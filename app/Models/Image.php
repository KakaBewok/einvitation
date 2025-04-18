<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = ['invitation_id', 'url', 'caption', 'type'];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
