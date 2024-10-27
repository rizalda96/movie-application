import Vue from 'vue'
import Router from 'vue-router'
import Container from '@components/Container.vue'
import MovieList from '@pages/movies/List.vue'
import MovieDetail from '@pages/movies/Detail.vue'
import MovieFavorite from '@pages/movies/Favorite.vue'

Vue.use(Router)

export const createRouter = (app, i18n) => {
  let routes = [
    {
      path: '/',
      redirect: '/',
      component: Container,
      children: [
        {
          path: '/',
          name: 'movies-list',
          component: MovieList,
          meta: {
            label: i18n.t('menu.movies'),
          }
        },
        {
          path: '/movies/:imdbID/detail',
          name: 'movies-detail',
          props: true,
          component: MovieDetail,
          meta: {
            label: i18n.t('menu.movies'),
          }
        },
        {
          path: '/movies/favorite',
          name: 'movies-favorite',
          component: () => MovieFavorite,
          meta: {
            label: i18n.t('menu.favorite_movies'),
          }
        },
      ],
    },
  ]


  const router = new Router({
    mode: 'history',
    base: '',
    scrollBehavior: () => ({ y: 0, x: 0 }),
    routes
  })

  router.beforeEach((to, from, next) => {
    document.title = to.meta.label
      ? `${to.meta.label} | ${Vue.prototype.$app.appname}`
      : Vue.prototype.$app.appname

    if (to.path == '/movies') {
      next({ name: 'movies-list' })
    } else {
      next()

    }
    // console.log(to, from);

  })
  return router
}



