<?php

namespace App\Services;

use App\Models\Invitation;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class InvitationService
{
    public function getAllInvitations()
    {
        $user_id = Auth::user()->id;

        Log::info('Fetching all invitations for user: ' . $user_id);

        return Invitation::with('theme')
            ->where('user_id', $user_id)
            ->get();
    }
}
