<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    /** @use HasFactory<\Database\Factories\VideoFactory> */
    use HasFactory;

    protected $fillable = [
        'invitation_id',
        'title',
        'description',
        'path',
        'thumbnail',
        'order_number',
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
