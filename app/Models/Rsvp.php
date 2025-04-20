<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rsvp extends Model
{
    use HasFactory;

    protected $fillable = [
        'invitation_id',
        'guest_name',
        'message',
        'attendance_status',
        'total_guest'
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
