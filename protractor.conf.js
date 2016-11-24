var binaryPath = '';

exports.config = {
  baseUrl: 'http://localhost:' + (process.env.PORT || '9000'),

  capabilities: {
    'browserName': 'phantomjs'
  },

  framework: 'jasmine2',

  specs: [
    'e2e/*.po.js',
    'src/app/**/*.protractor.spec.js'
  ],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    isVerbose: true,
    includeStackTrace: false
  },

  allScriptsTimeout: 20000
};
