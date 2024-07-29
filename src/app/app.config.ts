import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideSpinnerConfig } from 'ngx-spinner';
import { provideStore } from '@ngrx/store';
import { usersReducer } from './store/reducers/users.reducer';
import { provideEffects } from '@ngrx/effects';
import { UsersEffect } from './store/effects/users.effects'
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideSpinnerConfig({ type: 'ball-scale-multiple' }),
    provideStore({ users: usersReducer }),
    provideEffects([UsersEffect])

  ]
};
