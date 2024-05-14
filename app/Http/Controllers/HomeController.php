<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $product = Product::first();

        return Inertia::render('Home', [
            'product' => $product,
        ]);
    }
}