import {ModuleWithProviders} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
import {PeliculasgenerosComponent} from "./components/peliculasgeneros/peliculasgeneros.component"
import {PeliculaComponent} from "./components/pelicula/pelicula.component"

const appRoutes:Routes=[
    {path:"pelis-genero/:idgenero",component:PeliculasgenerosComponent},
    {path:"pelis/:idpeli",component:PeliculaComponent}
    ,{path:"buscar/:palabrabuscar",component:PeliculasgenerosComponent}
];

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
