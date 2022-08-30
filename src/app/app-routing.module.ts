import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./page/pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./page/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./page/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./page/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'vista-usuario',
    loadChildren: () => import('./vista-usuario/vista-usuario.module').then( m => m.VistaUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
