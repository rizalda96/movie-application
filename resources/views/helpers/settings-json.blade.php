<script type="application/json" data-settings-selector="settings-json">
  @php
    $settings = [
      'locale' => app()->getLocale(),
      'timezone' => config('app.timezone'),
      'appname' => config('app.name'),
    ];
    if(strpos(url()->current(), 'login') === false) {
      $settings['user'] = auth()->user();
      $settings['urlomdb'] = env('OMDB_URL') . env('OMDB_KEY');
    }
  @endphp
  {!! json_encode($settings) !!}
</script>
