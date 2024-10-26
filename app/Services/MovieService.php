<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MovieService
{
  protected $apiKey;

  public function __construct()
  {
    $this->client = new Client();
    $this->apiKey = env('OMDB_KEY');
    $this->url = env('OMDB_URL');
  }

  public function searchMovies(Request $request)
  {
    try {
      $response = $this->client->get($this->url, [
        'query' => [
          'apikey' => $this->apiKey,
          's' => $request->search ?? '',
          'page' => $request->page ?? 1,
        ]
      ]);

      $statusCode = $response->getStatusCode();

      if ($statusCode == 200) {
        $data = json_decode($response->getBody(), true);

        if ($data['Response'] == 'False') {
          return [
            'status' => 'error',
            'message' => $data['Error'] ?? trans('api.error'),
            'data' => null,
          ];
        }

        return [
          'status' => 'success',
          'message' => trans('api.success'),
          'data' => $data,
        ];
      }

      return [
        'status' => 'error',
        'message' => $response->json()['Error'] ?? trans('api.error'),
        'data' => null,
      ];
    } catch (\Throwable $th) {
      return [
        'status' => 'error',
        'message' => trans('api.error') . ': ' . $th->getMessage(),
        'data' => null,
      ];
    }
  }

  public function detailMovies($id, Request $request)
  {
    try {
      $response = $this->client->get($this->url, [
        'query' => [
          'apikey' => $this->apiKey,
          'i' => $id,
        ]
      ]);

      $statusCode = $response->getStatusCode();

      if ($statusCode == 200) {
        $data = json_decode($response->getBody(), true);

        if ($data['Response'] == 'False') {
          return [
            'status' => 'error',
            'message' => $data['Error'] ?? trans('api.error'),
            'data' => null,
          ];
        }

        return [
          'status' => 'success',
          'message' => trans('api.success'),
          'data' => $data,
        ];
      }

      return [
        'status' => 'error',
        'message' => $response->json()['Error'] ?? trans('api.error'),
        'data' => null,
      ];
    } catch (\Throwable $th) {
      return [
        'status' => 'error',
        'message' => trans('api.error') . ': ' . $th->getMessage(),
        'data' => null,
      ];
    }
  }
}
