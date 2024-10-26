<?php

namespace App\Http\Controllers;

use App\Models\MovieFavorite;
use App\Services\MovieService;
use Illuminate\Http\Request;

class MovieFavoriteController extends Controller
{
  protected $model;
  protected $movieService;

  public function __construct(
    MovieFavorite $model,
    MovieService $movieService
  ) {
    $this->model = $model;
    $this->movieService = $movieService;
  }

  public function search(Request $request)
  {
    $query = $this->model->query();

    if ($request->has('search')) {
      $query = $query->where('title', 'like', '%' . $request->search . '%');
    }

    return $query->paginate(10);
  }

  public function store(Request $request)
  {

    if ($request->is_from_list) {
      $movieResponse = $this->movieService->detailMovies($request->imdb_id, $request);
      $movie = $movieResponse['data'];

      if ($movie['Response'] == 'True') {
        $store = $this->model->firstOrCreate([
          'imdb_id' => $request->imdb_id,
          'title' => $movie['Title'],
          'year' => $movie['Year'],
          'genre' => $movie['Genre'],
          'director' => $movie['Director'],
          'plot' => $movie['Plot'],
          'poster' => $movie['Poster'],
          'imdb_rating' => $movie['imdbRating'],
          'imdb_vote' => $movie['imdbVotes'],
        ]);
      }
    } else {
      $store = $this->model->firstOrCreate([
        'imdb_id' => $request->imdb_id,
        'title' => $request->title,
        'year' => $request->year,
        'genre' => $request->genre,
        'director' => $request->director,
        'plot' => $request->plot,
        'poster' => $request->poster,
        'imdb_rating' => $request->imdb_rating,
        'imdb_vote' => $request->imdb_vote,
      ]);
    }

    if (!$store) {
      return $this->redirectResponse($request, trans('general.message.failed.store'), 'error');
    }

    return $this->redirectResponse($request, trans('general.message.success.store'), 'success', $request->toArray());
  }

  public function drop(Request $request)
  {
    $movie = $this->model->where('imdb_id', $request->id)->first();
    if (!$movie) {
      return response()->json([
        'status' => 'error',
        'message' => trans('api.not_found'),
      ], 404);
    }

    $movie->delete();

    return $this->redirectResponse($request, trans('general.message.success.destroy'), 'success', $request->toArray());
  }
}
