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
        'bank_name_one',
        'account_number_one',
        'account_holder_one',
        'bank_name_two',
        'account_number_two',
        'account_holder_two',
        'gift_delivery_address',
        'event_date',
        'event_type',
        'location',
        'message',
        'is_active',
        'activated_at',
        'expired_at'
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
