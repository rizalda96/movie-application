<template>
  <div class="container">
    <div class="d-flex mt-3 mb-3">
      <b-form-group
        id="input-group-1"
        :label="$t('movie.filter.search')"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="filter.search"
          @input="onSearch"
          :placeholder="$t('movie.filter.search_placeholder')"
        ></b-form-input>
      </b-form-group>
    </div>
    <div class="gallery">
      <b-card
        v-if="!loading || movies.length > 0"
        v-for="(item, index) in movies"
        :key="index"
        :title="item.Title + ' - ' + item.Year"
        :img-src="item.Poster != 'N/A' ? item.Poster : 'images/not_found.png'"
        img-width="100%"
        img-alt="Image"
        img-top
        style="max-width: 20rem;"
        class="mb-3 ml-3 mr-3"
      >
        <div class="d-flex justify-content-between">
          <b-button type="button" variant="primary" @click="detailMovie(item.imdbID)">{{ $t('movie.button.detail') }}</b-button>
          <b-button type="button" variant="primary" @click="favoriteMovie(item.imdbID)">{{ $t('movie.button.favorite') }}</b-button>
        </div>
      </b-card>
      <b-img
        v-if="loading || movies.length == 0"
        src="images/not_found.png"
        fluid
        class="mt-5"
        width="300px"
        height="300px"
        alt="image not found"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'movies-list',
    data() {
      return {
        loading: false,
        movies: [],
        page: 1,
        filter: {
          search: '',
          searchText: '',
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    created() {
      this.fetchMovies()
    },
    methods: {
      async fetchMovies() {
        try {
          this.loading = true
          const route = this.$app.route('movie.search')
          const response = await this.$http.get(route, {
            params: {
              search: this.filter.searchText,
              page: this.page,
            }
          })
          const {status, message, data} = response.data

          if (status == 'success') {
            if (data.Response) {
              this.movies.push(...data.Search)

              this.page++
            }
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
      async favoriteMovie(imdbId) {
        try {
          this.loading = true
          const route = this.$app.route('movie-favorite.store')

          let payload = {
            imdb_id: imdbId,
            is_from_list: true,
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
      detailMovie(id) {
        this.$router.push({
          name: 'movies-detail',
          params: {
            imdbID: id
          }
        })
      },
      onSearch: _.debounce(function() {
        if (this.filter.search.length == 0) {
          this.movies = []
          this.page = 1
          this.filter.searchText = ''
          this.fetchMovies()
        } else {
          this.movies = []
          this.page = 1
          this.filter.searchText = this.filter.search
          this.fetchMovies()
        }
      }, 550),
      handleScroll() {
        if ((window.innerHeight + window.scrollY + 2) >= (document.body.offsetHeight)) {
          this.fetchMovies();
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card-img-top{
      object-fit: cover;
      height: 450px;
      width: 100%;
    }
  }
</style>
