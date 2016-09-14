/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
declare var System: any;

// // map tells the System loader where to look for things
// System.packageWithIndex = true;

// let map = {
//   'app':                        'app', // 'dist',
//   'scripts/main':               'scripts/main.js',
//   '@angular':                   'node_modules/@angular',
//   'rxjs':                       'node_modules/rxjs'
// };
// // packages tells the System loader how to load when no filename and/or no extension
// let packages = {
//   'app':                        { main: 'script/main.js',  defaultExtension: 'js' },
//   'rxjs':                       { defaultExtension: 'js' },
//   'modules':                    { main: 'index', defaultExtension: 'js' },
//   'components':                 { main: 'index', defaultExtension: 'js' }
// };
// let ngPackageNames = [
//   'common',
//   'compiler',
//   'core',
//   'forms',
//   'http',
//   'platform-browser',
//   'platform-browser-dynamic',
//   'router'
// ];
// // Individual files (~300 requests):
// let packIndex = (pkgName) => {
//   packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
// }
// // Bundled (~40 requests):
// let packUmd = (pkgName) => {
//   packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
// }
// // Most environments should use UMD; some (Karma) need the individual index files
// let setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

// // Add package entries for angular packages
// ngPackageNames.forEach(setPackageConfig);
// let config = {
//   map: map,
//   packages: packages
// };

// System.config(config);


  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'scripts/main.js',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      rxjs: { defaultExtension: 'js' },
      'modules': { main: 'index', defaultExtension: 'js' },
      'components': { main: 'index', defaultExtension: 'js' }
    }
  });

