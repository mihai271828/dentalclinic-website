<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;

class TeamMemberController extends Controller
{
    public function index()
    {
        return TeamMember::all();
    }
}