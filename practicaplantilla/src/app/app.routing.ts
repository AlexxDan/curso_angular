import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from ".//components/home/home.component"
import {DetallePlantillaComponent} from "./components/detalle-plantilla/detalle-plantilla.component"
import {ModicarPlantillaComponent} from "./components/modicar-plantilla/modicar-plantilla.component";
import {ActualizadosComponent} from "./components/actualizados/actualizados.component"

const appRoutes: Routes = [
 {path:"",component:HomeComponent},
 {path:"detalle/:idplantilla" ,component:DetallePlantillaComponent},
 { path:"update",component:ModicarPlantillaComponent},
 { path:"actualizado/:funcion",component:ActualizadosComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);