import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TablamultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { TvComponent } from './components/rutas/tv/tv.component';
//Debemos importa los dos nombre anteirior de app.routing.ts
import { routing, appRoutingProviders} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    TablamultiplicarComponent,
    CineComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,FormsModule,routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
