<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\Console\Application;

class CloneController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects/Clone/Home');
    }
    public function discord()
    {
        return Inertia::render('Projects/Clone/Discord');
    }
    public function hbo()
    {
        return Inertia::render('Projects/Clone/Home');
    }
    public function youtube()
    {
        return Inertia::render('Projects/Clone/Youtube');
    }
}
