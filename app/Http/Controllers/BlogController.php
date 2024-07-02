<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\Console\Application;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects/Blog/Home');
    }
    public function content()
    {
        return Inertia::render('Projects/Blog/Content');
    }
}
