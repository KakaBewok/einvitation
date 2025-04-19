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
            ->where('user_id', $user_id)->orderBy('event_date', 'asc')
            ->get();
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
