const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  // Thirdparty barrels.
  'rxjs',
  // App specific barrels.
  'components',
];
const systemConfigPackages: any = {};
barrels.forEach(function (barrelName) {
    systemConfigPackages[barrelName] = { main: 'index' };
});
declare const System: any;

System.config({
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'scripts/main': 'scripts/main.js'
    },
    packages: systemConfigPackages
});
