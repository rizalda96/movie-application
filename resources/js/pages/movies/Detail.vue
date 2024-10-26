<template>
  <div>
    <div class="d-flex justify-content-center" v-if="loading">
      <b-spinner variant="primary" type="grow"></b-spinner>
    </div>
    <b-container class="mt-5" v-if="!loading && movie">
      <!-- Movie Card -->
      <b-card
        class="mb-3"
        :img-src="movie.Poster != 'N/A' ? movie.Poster : 'images/not_found.png'"
        img-alt="Movie Poster"
        img-top
      >
        <!-- Title -->
        <b-card-title>
          <div class="d-flex justify-content-between align-items-center">
            <h2>{{ movie.Title }}</h2>
            <span class="text-muted">{{ movie.Year }} &bullet; {{ movie.Runtime }}</span>
          </div>
        </b-card-title>

        <!-- IMDB Rating -->
        <b-row class="mb-3">
          <b-col cols="4">
            <h5>IMDb Rating</h5>
            <div class="d-flex align-items-center">
              <span>{{ movie.imdbRating }} /10</span>
              <small class="text-muted ml-2">({{ movie.imdbVotes }} ratings)</small>
            </div>
          </b-col>
        </b-row>

        <!-- Movie Tags -->
        <b-row>
          <b-col>
            <b-badge variant="info" class="mr-1">{{ movie.Genre }}</b-badge>
          </b-col>
        </b-row>

        <!-- Plot and Additional Info -->
        <b-row class="mt-3">
          <b-col cols="12">
            <p>
              <strong>Plot:</strong> {{ movie.Plot }}
            </p>
          </b-col>
        </b-row>

        <!-- Director and Additional Details -->
        <b-row>
          <b-col cols="12">
            <p><strong>{{ $t('general.director') }}:</strong> {{ movie.Director }}</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-button variant="warning" size="lg" type="button" @click="onFavorite">
              {{ $t('movie.button.favorite') }}
            </b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'movies-detail',
    props: {
      imdbId: null,
    },
    data() {
      return {
        loading: false,
        movie: null,
      }
    },
    created() {
      this.fetchMovies()
    },
    methods: {
      async fetchMovies() {
        try {
          this.loading = true

          const route = this.$app.route('movie.show', {
            id: this.$route.params.imdbID
          })

          const response = await this.$http.get(route)
          const {status, message, data} = response.data

          if (status == 'success') {
            if (data.Response) {
              this.movie = data
            }
          }

        } catch (error) {
          this.$app.alert.fire({
            icon: 'error',
            title: this.$app.i18n.$t('general.type.error'),
            text: error.message,
          })
        } finally {
          this.loading = false
        }
      },
      async onFavorite() {
        try {
          this.loading = true
          const route = this.$app.route('movie-favorite.store')

          let payload = {
            imdb_id: this.$route.params.imdbID,
            title: this.movie.Title,
            year: this.movie.Year,
            genre: this.movie.Genre,
            director: this.movie.Director,
            plot: this.movie.Plot,
            poster: this.movie.Poster,
            imdb_rating: this.movie.imdbRating,
            imdb_vote: this.movie.imdbVotes,
          }

          const response = await this.$http.post(route, payload)
          const {status, message, data} = response.data

          if (status == 'success') {
            this.$app.alert.fire({
              icon: 'success',
              title: this.$t('general.type.success'),
              text: message,
            })
          }

        } catch (error) {
          this.$app.alert.fire({
            icon: 'error',
            title: this.$t('general.type.error'),
            text: error.message,
          })
        } finally {
          this.loading = false
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
.card-img-top{
  object-fit: cover;
  height: 70vh;
  width: 100%;
}
</style>
