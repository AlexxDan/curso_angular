import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonaComponent } from './components/persona/persona.component';
import { CocheComponent } from './components/coche/coche.component';
import {FormsModule} from "@angular/forms";

import { EmpleadosalarioComponent } from './components/empleadosalario/empleadosalario.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    PersonaComponent,
    CocheComponent,
    EmpleadosalarioComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
