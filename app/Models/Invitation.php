<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'phone_number',
        'music_id',
        'greetings',
        'host_one_additional_info',
        'host_two_additional_info',
        'host_one_social_media',
        'host_two_social_media',
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
        'activated_at',
        'expired_at'
    ];

    protected static function booted()
    {
        static::saving(function ($invitation) {
            if ($invitation->host_nickname_one && $invitation->host_nickname_two) {
                $invitation->slug = Str::slug($invitation->host_nickname_one . '-' . $invitation->host_nickname_two);
            }
        });
    }

    protected $casts = [
        'event_date' => 'datetime',
        'activated_at' => 'datetime',
        'expired_at' => 'datetime',
    ];

    public function giftInfo()
    {
        return $this->hasMany(GiftInfo::class);
    }

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    public function music()
    {
        return $this->belongsTo(Music::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function theme()
    {
        return $this->belongsTo(Theme::class);
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
