const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .js('resources/js/auth.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');


if (mix.inProduction()) {
  mix.options({
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        }
      }
    }
  })
    .version()
}

mix.webpackConfig({
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      '@js': path.resolve(__dirname, "resources/js"),
      '@components': path.resolve(__dirname, "resources/js/components"),
      '@pages': path.resolve(__dirname, "resources/js/pages"),
    },
  },
})
