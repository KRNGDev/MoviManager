import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'pages/acercade',
    loadComponent: () => import('./pages/acercade/acercade.page').then(m => m.AcercadePage)
  },
  {
    path: 'pages/buscar',
    loadComponent: () => import('./pages/buscar/buscar.page').then(m => m.BuscarPage)
  },
  {
    path: 'pages/milista',
    loadComponent: () => import('./pages/milista/milista.page').then(m => m.MilistaPage)
  },
];
