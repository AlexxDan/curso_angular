import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TablamultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { TvComponent } from './components/rutas/tv/tv.component';
//Debemos importa los dos nombre anteirior de app.routing.ts
import { routing, appRoutingProviders} from "./app.routing";
import { MenuComponent } from './components/rutas/menu/menu.component';
import { Error404Component } from './components/rutas/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';



@NgModule({
  declarations: [
    AppComponent,
    TablamultiplicarComponent,
    CineComponent,
    TvComponent,
    MenuComponent,
    Error404Component,
    NumerodobleComponent
  ],
  imports: [
    BrowserModule,FormsModule,routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
