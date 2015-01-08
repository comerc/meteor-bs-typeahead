Package.describe({
  name: 'comerc:bs-typeahead',
  summary: 'Typeahead-plugin with Bootstrap',
  version: '1.0.1',
  git: 'https://github.com/comerc/meteor-bs-typeahead.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles([
    'typeahead.css',
    'typeahead.bundle.js',
  ], 'client');
});
