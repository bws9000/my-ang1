import { enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { GithubAuthComponent } from './app/git-hub/githubAuth.component';
import { appConfig } from './app/app.config';

enableProdMode();

bootstrapApplication(GithubAuthComponent, appConfig)
  .then((appRef) => {
    const customElement = createCustomElement(GithubAuthComponent, {
      injector: appRef.injector,
    });
    customElements.define('github-app', customElement);
    //console.log('custom element at: <github-app or whatever you're calling it>');
  })
  .catch((err) => console.error('Error during Angular app bootstrap', err));
