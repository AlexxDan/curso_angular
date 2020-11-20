import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeSeriesComponent } from './components/home-series/home-series.component';
import { appRoutingProviders,routing} from "./app.routing"
import {FormsModule} from "@angular/forms"
import  {HttpClientModule} from "@angular/common/http";
import { PersonajesComponent } from './components/personajes/personajes.component'
import {SerieService} from "./services/serie.service"
import {PersonajeService} from "./services/personaje.service";
import { InsertarPersonajeComponent } from './components/insertar-personaje/insertar-personaje.component';
import { ModifcarPersonajeComponent } from './components/modifcar-personaje/modifcar-personaje.component'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeSeriesComponent,
    PersonajesComponent,
    InsertarPersonajeComponent,
    ModifcarPersonajeComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProviders,SerieService,PersonajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
