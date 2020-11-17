import {Routes, RouterModule} from "@angular/router"
import { ModuleWithProviders} from "@angular/core"
import {DetallempleadosComponent} from "./components/detallempleados/detallempleados.component"
import {TablaempeladosComponent} from "./components/tablaempelados/tablaempelados.component"

const appRoutes:Routes=[
    {path:"empleados",component:TablaempeladosComponent},
    {path:"detallesempleado/:empno",component:DetallempleadosComponent},
];

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);