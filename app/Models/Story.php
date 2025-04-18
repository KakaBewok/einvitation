<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use HasFactory;

    protected $fillable = [
        'invitation_id',
        'title',
        'content',
        'image_url',
        'story_date',
        'order_number'
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
