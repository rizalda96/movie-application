<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <div class="container">
        <b-navbar-brand :to="{ name: 'movies-list' }">{{ $app.appname }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link :to="{ name: 'movies-list' }" class="nav-link">
              {{ $t('menu.movies') }}
            </router-link>
            <router-link :to="{ name: 'movies-favorite' }" class="nav-link">
              {{ $t('menu.favorite_movies') }}
            </router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown :text="locale" right>
              <b-dropdown-item href="javascript:void(0)" @click="changeLocale('en')">EN</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)" @click="changeLocale('id')">ID</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ $app.user.username }}</em>
              </template>
              <b-dropdown-item
                href="javascript:void(0)"
                onclick="doLogout.apply(this, arguments)"
              >
                {{ $t('auth.logout') }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'container',
  data() {
    return {
      locale: this.$app.locale,
    }
  },
  methods: {
    async changeLocale(lang) {
      try {
        const route = this.$app.route('setLocale')
        const { data } = await this.$http.post(route, {
          locale: lang,
        })

        if (data.success) {
          this.$app.i18n.locale = lang
          this.locale = lang
        }

      } catch (error) {
        this.$app.alert.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        })
      }
    }
  },
}
</script>
