declare var System: any;

// apply the CLI SystemJS configuration.
System.config({
  paths: {
    "node_modules:": "node_modules/",
    "app/": "bin/scripts/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'scripts/main': 'scripts/main.js'
  },
  packages: {
    '@angular/core': { main: 'index' },
    '@angular/common': { main: 'index' },
    '@angular/compiler': { main: 'index' },
    '@angular/platform-browser': { main: 'index' },
    '@angular/platform-browser-dynamic': { main: 'index' },
    'rxjs': { main: 'Rx' },
    'components': { main: 'index' }
  }
});
