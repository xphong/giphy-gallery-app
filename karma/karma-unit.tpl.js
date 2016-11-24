module.exports = function ( karma ) {
    var configuration = {

        basePath: '../',

        files: [
            <% scripts.forEach( function ( file ) { %>'<%= file %>',
                <% }); %>
            'src/**/*.js'
    ],
    exclude: [
      'src/assets/**/*.js',
      'src/**/*.protractor.spec.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-coverage' ],

    reporters: [ 'progress', 'coverage' ],

    preprocessors: {
        'src/**/!(*spec).js': ['coverage']
    },

    coverageReporter: {
        type: 'lcov',
        dir: 'coverage'
    },

    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',
            autoWatch: false,

    browsers: [
      'Chrome'
    ],

    customLaunchers: {  
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  };

  if (process.env.TRAVIS) {
      configuration.browsers = ['Chrome_travis_ci'];
  }
   
  karma.set(configuration);
};

