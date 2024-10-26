<template>
  <div class="container">
    <b-card
      style="width: 30rem;"
      :title="$t('auth.login.title')"
    >
      <ValidationObserver v-slot="{ passes }" :slim="true">
        <b-form @submit.prevent="passes(submit)" id="form-login">
          <b-form-group
            :label="$t('auth.login.username')"
            label-for="username"
          >
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="Username"
            >
              <b-input-group
                name="username"
                class="mb-2 mr-sm-2 mb-sm-0"
              >
                <b-form-input
                  v-model="model.username"
                  trim
                  id="username"
                  :disabled="loading"
                  :placeholder="$t('auth.login.username')"
                ></b-form-input>
              </b-input-group>
              <invalid-feedback :error="errors[0] || messages.username" class="mt-1"></invalid-feedback>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            :label="$t('auth.login.password')"
            label-for="password"
          >
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="Password"
            >
              <b-input-group
                name="password"
                class="mb-2 mr-sm-2 mb-sm-0"
              >
                <b-form-input
                  type="password"
                  v-model="model.password"
                  trim
                  id="password"
                  :disabled="loading"
                  :placeholder="$t('auth.login.password')"
                ></b-form-input>
              </b-input-group>
              <invalid-feedback :error="errors[0] || messages.password" class="mt-1"></invalid-feedback>
            </ValidationProvider>
          </b-form-group>
          <div class="action-button mt-3">
            <div class="row no-gutters">
              <div class="col-lg-12 pr-lg-1 my-1">
                <button
                  id="js-login-btn"
                  type="submit"
                  class="btn btn-info btn-block btn-md"
                  :disabled="loading"
                >
                  <i class="fal fa-sign-in mr-1"></i>
                  {{ loading ? $t('general.loading') : $t('auth.button.login') }}
                </button>
              </div>
            </div>
          </div>
        </b-form>
      </ValidationObserver>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "LoginApp",
    data() {
      return {
        loading: false,
        model: {
          username: null,
          password: null,
        },
        messages: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      async submit() {
        let vm = this
        vm.loading = true

        vm.messages.username = ''
        vm.messages.password = ''

        Promise.resolve()
          .then(credentials => vm.$http.post(vm.$app.route('login'), vm.model))
          .then(({ data }) => {
            if (data.status != 'success') {
              vm.$app.alert.fire({
                icon: 'error',
                title: $t('auth.message.failed'),
                text: $t('auth.message.failed_msg'),
              })
              return
            }
            location.href = '/'
          })
          .catch(err => {
            if (err.response) {
              let error = err.response?.data
              Object.keys(error.errors).forEach(idx => {
                vm.messages[idx] = error.errors[idx].shift()
              })
              vm.loading = false
            }
          })
      },
    },
  }
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
