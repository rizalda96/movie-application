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
        :title="item.title + ' - ' + item.year"
        :img-src="item.poster != 'N/A' ? item.poster : 'images/not_found.png'"
        img-width="100%"
        img-alt="Image"
        img-top
        style="max-width: 20rem;"
        class="mb-3 ml-3 mr-3"
      >
        <div class="d-flex justify-content-between">
          <b-button type="button" variant="primary" @click="detailMovie(item.imdb_id)">{{ $t('movie.button.detail') }}</b-button>
          <b-button type="button" variant="primary" @click="delFavorite(item.imdb_id)">{{ $t('movie.button.del_favorite') }}</b-button>
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
        finished: false,
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
        if (this.loading || this.finished) return;
        try {
          this.loading = true
          const route = this.$app.route('movie-favorite.search')
          const { data } = await this.$http.get(route, {
            params: {
              search: this.filter.searchText,
              page: this.page,
            }
          })

          this.movies.push(...data.data)
          this.finished = !data.next_page_url;
          this.page++

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
      async delFavorite(imdb_id) {
        try {
          this.loading = true
          const route = this.$app.route('movie-favorite.drop')
          const { data } = await this.$http.delete(route, {
            params: {
              id: imdb_id,
            }
          })

          if (data.status == 'success') {
            this.loading = false
            this.finished = false
            this.page = 1
            this.$app.alert.fire({
              icon: 'success',
              title: this.$t('general.type.success'),
              text: data.message,
            }).then(() => {
              this.movies = []
              this.fetchMovies()
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
          this.finished = false
          this.fetchMovies()
        } else {
          this.movies = []
          this.page = 1
          this.filter.searchText = this.filter.search
          this.finished = false
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
