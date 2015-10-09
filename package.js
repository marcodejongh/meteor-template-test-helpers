Package.describe({
  name: 'mdj:template-test-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use([
    'ecmascript',
    'underscore',
    'templating',
    'practicalmeteor:sinon',
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
