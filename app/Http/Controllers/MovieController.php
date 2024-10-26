<?php

namespace App\Http\Controllers;

use App\Services\MovieService;
use Illuminate\Http\Request;

class MovieController extends Controller
{
  protected $movieService;

  public function __construct(
    MovieService $movieService
  ) {
    $this->movieService = $movieService;
  }


  public function search(Request $request)
  {
    $response = $this->movieService->searchMovies($request);
    return $this->redirectResponse($request, $response['message'], $response['status'], $response['data']);
  }

  public function show($id, Request $request)
  {
    $response = $this->movieService->detailMovies($id, $request);
    return $this->redirectResponse($request, $response['message'], $response['status'], $response['data']);
  }
}
