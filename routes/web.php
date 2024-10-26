<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes(['register' => false]);

Route::get('/', 'HomeController@index')->name('home');

// set locale
Route::post('/set-locale', 'LocaleController@index')->name('setLocale');


Route::group([
  'prefix' => 'movie',
  'as' => 'movie.',
  'middleware' => ['auth']
], function () {
  Route::get('search', 'MovieController@search')->name('search');
  Route::get('{id}/show', 'MovieController@show')->name('show');
});

Route::group([
  'prefix' => 'movie-favorite',
  'as' => 'movie-favorite.',
  'middleware' => ['auth']
], function () {
  Route::get('search', 'MovieFavoriteController@search')->name('search');
  Route::post('store', 'MovieFavoriteController@store')->name('store');
  Route::delete('drop', 'MovieFavoriteController@drop')->name('drop');
});






Route::get('/{vue_capture?}', 'HomeController@index')
  ->where('vue_capture', '[\/\w\.-]*')
  ->name('home');
