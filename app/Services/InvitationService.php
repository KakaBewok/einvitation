<?php

namespace App\Services;

use App\Models\Invitation;
use App\Models\Theme;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class InvitationService
{
    public function getPrivateInvitations()
    {
        $user_id = Auth::user()->id;

        Log::info('Fetching all invitations for user: ' . $user_id);

        return Invitation::with('theme')
            ->where('user_id', $user_id)->orderBy('event_date', 'asc')
            ->get();
    }

    public function getInvitationById(int $id)
    {
        try {
            return Invitation::with('theme', 'parents', 'images', 'stories', 'rundwons')->find($id);
        } catch (\Exception $e) {
            Log::error('Failed to fetch invitation by ID', [
                'id' => $id,
                'error_message' => $e->getMessage(),
            ]);
        }
    }

    public function delete(int $id)
    {
        try {
            $data = Invitation::find($id);
            if ($data) {
                return $data->delete();
            }
            return false;
        } catch (\Exception $e) {
            Log::error('Failed to delete data invitation', [
                'id' => $id,
                'error_message' => $e->getMessage(),
            ]);
        }
    }
}
