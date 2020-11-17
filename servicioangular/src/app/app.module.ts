import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonaComponent } from './components/persona/persona.component';
import { CocheComponent } from './components/coche/coche.component';
import {FormsModule} from "@angular/forms";
import { routing,appRoutingProviders} from "./app.routing"

import { EmpleadosalarioComponent } from './components/empleadosalario/empleadosalario.component';
import { TablaempeladosComponent } from './components/tablaempelados/tablaempelados.component';
import { DetallempleadosComponent } from './components/detallempleados/detallempleados.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    PersonaComponent,
    CocheComponent,
    EmpleadosalarioComponent,
    TablaempeladosComponent,
    DetallempleadosComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
