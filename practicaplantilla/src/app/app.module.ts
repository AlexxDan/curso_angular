import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import { appRoutingProviders,routing} from "./app.routing";
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component'
import {PlantillaService} from "./services/plantilla.service";
import { DetallePlantillaComponent } from './components/detalle-plantilla/detalle-plantilla.component';
import { ModicarPlantillaComponent } from './components/modicar-plantilla/modicar-plantilla.component';
import { ActualizadosComponent } from './components/actualizados/actualizados.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetallePlantillaComponent,
    ModicarPlantillaComponent,
    ActualizadosComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,routing
  ],
  providers: [appRoutingProviders,PlantillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
