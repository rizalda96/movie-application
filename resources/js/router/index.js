import Vue from 'vue'
import Router from 'vue-router'
import Container from '@components/Container'

Vue.use(Router)

export const createRouter = (app, i18n) => {
  let routes = [
    {
      path: '/',
      redirect: '/movies',
      component: Container,
      children: [
        {
          path: '/movies',
          name: 'movies-list',
          component: () => import('@pages/movies/List.vue'),
          meta: {
            label: i18n.t('menu.movies'),
          }
        },
        {
          path: '/movies/:imdbID/detail',
          name: 'movies-detail',
          props: true,
          component: () => import('@pages/movies/Detail.vue'),
          meta: {
            label: i18n.t('menu.movies'),
          }
        },
        {
          path: '/movies/favorite',
          name: 'movies-favorite',
          component: () => import('@pages/movies/Favorite.vue'),
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

    next()
  })
  return router
}



