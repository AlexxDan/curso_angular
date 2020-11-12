import { Routes,RouterModule } from "@angular/router"
import  { Component, ModuleWithProviders} from "@angular/core"
import { ConjeturacollatzComponent} from "./components/conjeturacollatz/conjeturacollatz.component";

const appRoutes: Routes=[
    {path:'collatz/:num',component:ConjeturacollatzComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);