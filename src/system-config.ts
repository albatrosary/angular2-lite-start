/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
declare var System: any;

// map tells the System loader where to look for things
System.packageWithIndex = true;

let map = {
  'app':                        'app', // 'dist',
  'scripts/main':               'scripts/main.js',
  '@angular':                   'node_modules/@angular',
  'rxjs':                       'node_modules/rxjs'
};
// packages tells the System loader how to load when no filename and/or no extension
let packages = {
  'app':                        { main: 'script/main.js',  defaultExtension: 'js' },
  'rxjs':                       { defaultExtension: 'js' },
  'components':                 { main: 'index', defaultExtension: 'js' }
};
let ngPackageNames = [
  'common',
  'compiler',
  'core',
  'forms',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'router',
  'router-deprecated'
];
// Individual files (~300 requests):
let packIndex = (pkgName) => {
  packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
}
// Bundled (~40 requests):
let packUmd = (pkgName) => {
  packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
}
// Most environments should use UMD; some (Karma) need the individual index files
let setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

// Add package entries for angular packages
ngPackageNames.forEach(setPackageConfig);
let config = {
  map: map,
  packages: packages
};

System.config(config);

