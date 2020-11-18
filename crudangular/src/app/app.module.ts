import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutingProviders,routing} from "./app.routing"
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {HttpClientModule} from "@angular/common/http"
import{DepartamentoService} from "./services/departamento.service";
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { InsertardeptComponent } from './components/insertardept/insertardept.component';
import { DetalledepartamentoComponent } from './components/detalledepartamento/detalledepartamento.component';
import { ModifcardeptComponent } from './components/modifcardept/modifcardept.component'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DepartamentoComponent,
    InsertardeptComponent,
    DetalledepartamentoComponent,
    ModifcardeptComponent
  ],
  imports: [
    BrowserModule,FormsModule,routing,HttpClientModule
  ],
  providers: [appRoutingProviders,DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
