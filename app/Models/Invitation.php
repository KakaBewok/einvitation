<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'theme_id',
        'slug',
        'event_title',
        'host_one_name',
        'host_two_name',
        'host_one_nickname',
        'host_two_nickname',
        'event_date',
        'event_type',
        'location',
        'message',
        'is_active',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function theme()
    {
        return $this->belongsTo(Theme::class);
    }

    public function parents()
    {
        return $this->hasMany(ParentModel::class);
    }

    public function rsvps()
    {
        return $this->hasMany(Rsvp::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function stories()
    {
        return $this->hasMany(Story::class);
    }

    public function rundowns()
    {
        return $this->hasMany(Rundown::class);
    }

    public function guests()
    {
        return $this->hasMany(Guest::class);
    }
}
