import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then(m => m.Register),
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'historial',
        loadComponent: () => import('./pages/historial/historial').then(m => m.Historial),
      },
      {
        path: 'asignar-tiempo',
        loadComponent: () => import('./pages/asignar-tiempo/asignar-tiempo').then(m => m.AsignarTiempo),
      },
      {
        path: 'alertas',
        loadComponent: () => import('./pages/alertas/alertas').then(m => m.Alertas),
      },
      {
        path: 'cuenta',
        loadComponent: () => import('./pages/cuenta/cuenta').then(m => m.Cuenta),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
