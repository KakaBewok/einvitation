<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\InvitationService;
use Inertia\Inertia;

class InvitationController extends Controller
{
    protected $invitationService;

    // Constructor injection
    public function __construct(InvitationService $invitationService)
    {
        $this->invitationService = $invitationService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $invitations = $this->invitationService->getPrivateInvitations();
        return Inertia::render('Invitation/index', [
            'invitations' => $invitations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $invitation = $this->invitationService->getInvitationById($id);

        return Inertia::render('Invitation/edit', [
            'invitation' => $invitation,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->invitationService->delete($id);
    }
}
