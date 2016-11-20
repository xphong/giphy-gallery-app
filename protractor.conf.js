var binaryPath = '';

exports.config = {
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
