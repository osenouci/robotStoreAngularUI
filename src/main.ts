import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


let loadingTime = 2000;
if (environment.production) {
  enableProdMode();
  loadingTime = 0;
}


setTimeout(() => {

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

}, loadingTime)
