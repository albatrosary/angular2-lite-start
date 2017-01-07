import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './../modules/main.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);