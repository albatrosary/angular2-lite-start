import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../modules/main.module.ngfactory';
const platform = platformBrowser();
platform.bootstrapModuleFactory(AppModuleNgFactory);
