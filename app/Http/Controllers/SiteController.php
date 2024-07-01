<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\Console\Application;

class SiteController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome');
    }
    public function blog()
    {
        return Inertia::render('Projects/Blog/Home');
    }
    public function booking()
    {
        return Inertia::render('Projects/Booking/Home');
    }
    public function calculator()
    {
        return Inertia::render('Projects/Calculator/Home');
    }
    public function clone()
    {
        return Inertia::render('Projects/Clone/Home');
    }
    public function cms()
    {
        return Inertia::render('Projects/Cms/Home');
    }
    public function crud()
    {
        return Inertia::render('Projects/Crud/Home');
    }
    public function dashboard()
    {
        return Inertia::render('Projects/Dashboard/Home');
    }
    public function delivery()
    {
        return Inertia::render('Projects/Delivery/Home');
    }
    public function eccomerce()
    {
        return Inertia::render('Projects/Eccomerce/Home');
    }
    public function gallery()
    {
        return Inertia::render('Projects/Gallery/Home');
    }
    public function playlist()
    {
        return Inertia::render('Projects/Playlist/Home');
    }
    public function porfolio()
    {
        return Inertia::render('Projects/Porfolio/Home');
    }
    public function quiz()
    {
        return Inertia::render('Projects/Quiz/Home');
    }
    public function ranking()
    {
        return Inertia::render('Projects/Ranking/Home');
    }
    public function schedule()
    {
        return Inertia::render('Projects/Schedule/Home');
    }
    public function siteapi()
    {
        return Inertia::render('Projects/SiteApi/Home');
    }
    public function socialmedia()
    {
        return Inertia::render('Projects/SocialMedia/Home');
    }
    public function tictactoe()
    {
        return Inertia::render('Projects/TicTacToe/Home');
    }
    public function weather()
    {
        return Inertia::render('Projects/Weather/Home');
    }
}
