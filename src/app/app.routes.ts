import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';

export const routes: Routes = [
  // Landing page → first
  { path: '', component: LandingComponent },

  // Auth page
  { path: 'auth', component: AuthComponent },

  // Home page after login
  { path: 'home', component: HomeComponent },

  // Other pages

  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },

  // Redirect invalid paths
  { path: '**', redirectTo: '' }
];
