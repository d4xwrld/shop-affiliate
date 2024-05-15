<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});


Route::get('/db-check', function () {
    try {
        DB::connection()->getPdo();
        return 'Database connection is okay!';
    } catch (\Exception $e) {
        return 'Failed to connect to the database: ' . $e->getMessage();
    }
});

Route::get('/php-version', function () {
    return PHP_VERSION;
});

Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
Route::get('/dashboard', function () {
    return Inertia::render('ProductDashboard');
});
