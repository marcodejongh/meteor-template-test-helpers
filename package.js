Package.describe({
  name: 'mdj:template-test-helpers',
  version: '0.1.0',
  summary: 'Utilities for unit & integration testing template helpers and callbacks',
  git: 'https://github.com/marcodejongh/meteor-template-test-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use([
    'ecmascript',
    'underscore',
    'templating',
    'practicalmeteor:sinon@1.14.1_2',
    'jquery'
  ]);

  api.addFiles([
    'client/namespace.js',
    'client/integration-test-helpers.js',
    'client/utilities.js'
  ], 'client');

  api.export('TemplateTestHelpers', 'client');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'mike:mocha-package@0.5.8',
    'practicalmeteor:sinon',
    'practicalmeteor:chai',
    'underscore',
    'templating',
    'blaze',
    'mdj:template-test-helpers'
  ]);

  api.addFiles([
    'test/client/testTemplates.html',
    'test/client/testTemplates.js',
    'test/client/utilities.test.js'
  ], 'client');
});
