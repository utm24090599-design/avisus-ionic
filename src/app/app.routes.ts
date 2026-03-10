import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./components/molecules/login/login.component').then((m) => m.LoginComponent),
  },
  {
     path: 'register',
    loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent),

  }
];
