<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParentModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'invitation_id',
        'name',
        'host_role',
        'relation',
        'image_url',
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
