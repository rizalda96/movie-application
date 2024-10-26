<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMovieFavoritesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('movie_favorites', function (Blueprint $table) {
      $table->bigIncrements('id')->index();
      $table->string('imdb_id', 50)->unique()->index();
      $table->string('title');
      $table->integer('year');
      $table->string('genre', 100);
      $table->string('director', 100);
      $table->text('plot');
      $table->text('poster');
      $table->string('imdb_rating', 10);
      $table->string('imdb_vote', 50);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('movie_favorites');
  }
}
