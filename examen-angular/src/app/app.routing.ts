import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeSeriesComponent} from "./components/home-series/home-series.component"
import {PersonajesComponent} from "./components/personajes/personajes.component"
import {InsertarPersonajeComponent} from "./components/insertar-personaje/insertar-personaje.component"
import {ModifcarPersonajeComponent} from "./components/modifcar-personaje/modifcar-personaje.component"

const appRoutes: Routes = [
    {path:"",component:HomeSeriesComponent},
    {path:"personaje/:idserie",component:PersonajesComponent},
    {path:"newpersonaje",component:InsertarPersonajeComponent},
    {path:"update",component:ModifcarPersonajeComponent}
];

   export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);
