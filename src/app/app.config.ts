import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  //provideZoneChangeDetection,
} from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    //provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
