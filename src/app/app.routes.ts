import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
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
  {
    path: 'ficha/:id',
    loadComponent: () => import('./pages/ficha/ficha.page').then(m => m.FichaPage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then(m => m.IntroPage)
  },
  {
    path: 'pages/inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },  {
    path: 'salir',
    loadComponent: () => import('./pages/salir/salir.page').then( m => m.SalirPage)
  },


];
