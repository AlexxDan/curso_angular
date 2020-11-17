import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {routing,appRoutingProviders} from "./app.routing";
import { PeliculasgenerosComponent } from './components/peliculasgeneros/peliculasgeneros.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component'
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PeliculasgenerosComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
