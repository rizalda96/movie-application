<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

class Controller extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  protected function redirectResponse(Request $request, $message, $type = 'success', $data = null)
  {
    if ($request->wantsJson()) {
      return response()->json([
        'status'  => $type,
        'message' => $message,
        'data' => $data,
      ]);
    }

    return redirect()->back()->with($type, $message);
  }
}
