import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//tdodo los componentes que se deasea dibujar de la zona de rutas

import { HomeComponent } from './components/rutas/home/home.component';
import { MusicaComponent } from './components/rutas/musica/musica.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { TvComponent } from './components/rutas/tv/tv.component';

//Nos creamos un array de rutas
//La rutas , llevan implicita la /, por lo que no hay que ponerlas
// si son desde la raiz
// {
//     path:"",componente:Home
// }
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cine', component: CineComponent },
  { path: 'music', component: MusicaComponent },
  { path: 'tv', component: TvComponent },
];
//Para poder utilizar esta clase con sus import integrados
//dentro de mmodules,debemos indicar que es un proveedor de rutas
//y decirle las rutas que tenemos : appRoutes
//Esto son nombres de variables para llamarlas desde module.ts

export const appRoutingProviders: any[] = [];

//Es el nombre que utilizaremos en el import de module.ts
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
