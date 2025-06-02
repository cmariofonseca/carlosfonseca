import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cv',
    loadComponent: () => import('./pages/cv/cv').then((c) => c.Cv),
  },
  {
    path: '',
    redirectTo: 'cv',
    pathMatch: 'full',
  },
];
