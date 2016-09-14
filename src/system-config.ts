/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
declare var System: any;

System.config({
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    'app': 'scripts/main.aot.js',
    // angular bundles
    '@angular/core': 'npm:@angular/core',
    '@angular/common': 'npm:@angular/common',
    '@angular/compiler': 'npm:@angular/compiler',
    '@angular/platform-browser': 'npm:@angular/platform-browser',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic',
    '@angular/http': 'npm:@angular/http',
    '@angular/router': 'npm:@angular/router',
    '@angular/forms': 'npm:@angular/forms',
    // other libraries
    'traceur': 'npm:traceur/bin/',
    'rxjs': 'npm:rxjs'
  },
  // packages tells the System loader how to load when no filename and/or no extension
  packages: {
    "@angular/core": { main: 'index', defaultExtension: 'js' }, 
    "@angular/common": { main: 'index', defaultExtension: 'js' }, 
    "@angular/compiler": { main: 'index', defaultExtension: 'js' }, 
    "@angular/platform-browser": { main: 'index', defaultExtension: 'js' }, 
    "@angular/platform-browser-dynamic": { main: 'index', defaultExtension: 'js' }, 
    "@angular/http": { main: 'index', defaultExtension: 'js' }, 
    "@angular/router": { main: 'index', defaultExtension: 'js' }, 
    "@angular/forms": { main: 'index', defaultExtension: 'js' }, 
    traceur: { main: 'traceur', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js' },
    'modules': { main: 'index', defaultExtension: 'js' },
    'components': { main: 'index', defaultExtension: 'js' }
  }
});
