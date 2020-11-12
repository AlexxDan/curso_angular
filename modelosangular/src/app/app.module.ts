import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumeroaleatorioComponent } from './components/numeroaleatorio/numeroaleatorio.component';
import { ConjeturacollatzComponent } from './components/conjeturacollatz/conjeturacollatz.component';
import { routing,appRoutingProviders } from "./app.routing";
import { ListaproductoComponent } from './components/listaproducto/listaproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    NumeroaleatorioComponent,
    ConjeturacollatzComponent,
    ListaproductoComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
