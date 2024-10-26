<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocaleController extends Controller
{
  public function index(Request $request)
  {
    $locale = $request->input('locale');
    app()->setLocale($locale);
    return response()->json(['success' => true]);
  }
}
