<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rundown extends Model
{
    use HasFactory;

    protected $fillable = [
        'location',
        'location_url',
        'date',
        'time_zone',
        'invitation_id',
        'title',
        'start_time',
        'end_time',
        'image_url',
        'description',
        'order_number'
    ];

    protected $casts = [
        'date' => 'datetime'
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
