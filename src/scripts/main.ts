import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../modules';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);