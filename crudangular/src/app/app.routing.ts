import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {DepartamentoComponent}from "./components/departamento/departamento.component"
import {InsertardeptComponent} from"./components/insertardept/insertardept.component"
import {ModifcardeptComponent} from "./components/modifcardept/modifcardept.component"

const appRoutes: Routes = [
 {path:"",component:DepartamentoComponent},
 {path:"insertar",component:InsertardeptComponent},
 {path:"eliminardept/:idDept",component:DepartamentoComponent},
 {path:"updatedept/:idDept",component:ModifcardeptComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);
