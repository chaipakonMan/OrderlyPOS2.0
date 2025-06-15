import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: AndroidPermissions, useClass: AndroidPermissions }
  ]
};
