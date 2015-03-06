Package.describe({
  name: 'jeremy:geocomplete',
  summary: 'Geocoding and Google Places Autocomplete Plugin',
  version: '1.6.4_2',
  git: 'https://github.com/jshimko/meteor-geocomplete.git'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0.2");

  api.use([
    'jquery',
    'dburles:google-maps@1.0.8'
  ]);

  api.imply('dburles:google-maps');

  api.addFiles([
    'lib/jquery.geocomplete.js'
  ], 'client');

});
