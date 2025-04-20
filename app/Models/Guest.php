<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'invitation_id',
        'name',
        'phone_number',
        'slug',
        'is_attending',
        'total_guest',
        'notes',
        'address',
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
