<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('auth/login', 'Api\AuthController@login');
Route::post('auth/refresh-token', 'Api\AuthController@refresh');
Route::get('auth/logout', 'Api\AuthController@logout');

Route::group(['midleware' => 'jwt.auth', 'namespace' => 'Api\\', 'prefix' => 'auth', 'as' => 'auth.'], function (){
    Route::get('me', 'AuthController@getAuthenticatedUser');
});

Route::group(['midleware' => 'jwt.auth', 'namespace' => 'Api\\'], function (){
    Route::post('events/answer/{id}', 'EventController@answer');
    Route::get('events/participants/{id}', 'EventController@participants');
    Route::delete('events/{id}/participant/{participant_id}', 'EventController@removeParticipant');
    Route::post('events/{id}/participants', 'EventController@addParticipant');
    Route::apiResource('events', 'EventController');
    Route::apiResource('users', 'UserController');
});
