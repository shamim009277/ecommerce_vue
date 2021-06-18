<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'],function(){
    Route::get('dashboard',[HomeController::class, 'index']);
    //Route::get('/',[HomeController::class,['getUser']]);

    Route::get('/',function(){
        return response()->json([
            'user'=>\Auth::user()
        ],200);
    });
});



Route::get('/{path}',[HomeController::class, 'index']);

