# Giphy gallery app

[![Build Status](https://travis-ci.org/xphong/giphy-gallery-app.svg?branch=master)](https://travis-ci.org/xphong/giphy-gallery-app)

A simplified version of the ngBoilerplate angular project template.
[https://github.com/ngbp/ngbp](https://github.com/ngbp/ngbp)

***

## Quick Start

### Install required dependencies
```
bower install
yarn
```

OR

```
bower install
npm install
```

### Watching (Dev)

* Run a localhost server listen on port 9000:
`grunt watch`

### Building (Prod)

* Concat all html, js and css files and minify them to the *bin* directory:
`grunt`

### Testing

* Install the drivers:
`node_modules/protractor/bin/webdriver-manager update`
`node_modules/grunt-protractor-runner/scripts/webdriver-manager-update`
* Run the server via terminal:
`grunt watch`
* Run the e2e tests:
`grunt teste2e`
* For unit tests:
`grunt test`

## Features

* Display giphy data
* Like button
* Like all button
* Unit tests
* E2E tests (in `feature/e2e branch`)
* Travis CI

## Style

* JavaScript: [John Papa Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
* CSS: [BEM Naming](http://getbem.com/naming/)

## Technologies

* Angular 1.5.8
* Bootstrap 3.3.7
* Grunt
* Karma/Jasmine/Protractor
