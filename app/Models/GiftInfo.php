<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GiftInfo extends Model
{
    /** @use HasFactory<\Database\Factories\GiftInfoFactory> */
    use HasFactory;

    protected $fillable = [
        'invitation_id',
        'provider_name',
        'account_number',
        'account_holder',
        'gift_delivery_address',
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
