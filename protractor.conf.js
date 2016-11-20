var binaryPath = '';

exports.config = {
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': binaryPath,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },

  framework: 'jasmine2',

  specs: [
    'src/e2e/*.po.js',
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
