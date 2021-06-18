<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CategoryController;

Route::get('login',[LoginController::class,'showLoginForm']);
Route::post('login',[LoginController::class,'login'])->name('admin.login');

Route::get('/dashboard', function () {
    return view('admin.admin_master');
});

Route::get('/getdata',function(){
    return response()->json([
        'admin' => \Auth::guard('admin')->user(),
    ],200);
});

//Brand Controller
Route::get('/dashboard/brand',[BrandController::class,'brandList']);
Route::get('/dashboard/brand/add',[BrandController::class,'addForm']);
Route::post('/dashboard/brand/store',[BrandController::class,'brandStore']);
Route::get('/dashboard/getbrand',[BrandController::class,'brandListShow']);

//Category Controller
Route::get('/dashboard/category',[CategoryController::class,'categoryList']);
Route::get('/dashboard/category/add',[CategoryController::class,'addForm']);
Route::post('/dashboard/category/categoryStore',[CategoryController::class,'categoryStore']);
Route::get('/dashboard/getCategory',[CategoryController::class,'caregoryListShow']);



Route::get('/example',function(){
    return view('admin.admin_master');
});

//Route::get('/login',[AdminController::class,'adminLogin']);
Route::get('/{path}', function () {
    return view('admin.admin_master');
});
