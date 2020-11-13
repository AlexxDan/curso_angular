import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumeroaleatorioComponent } from './components/numeroaleatorio/numeroaleatorio.component';
import { ConjeturacollatzComponent } from './components/conjeturacollatz/conjeturacollatz.component';
import { routing,appRoutingProviders } from "./app.routing";
import { ListaproductoComponent } from './components/listaproducto/listaproducto.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';
import { HijocontadorComponent } from './components/hijocontador/hijocontador.component';
import { PadrecontadoresComponent } from './components/padrecontadores/padrecontadores.component';
import {LibreriaComponent} from "./components/libreria/libreria.component"
import { ComicComponent } from './components/comic/comic.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NumeroaleatorioComponent,
    ConjeturacollatzComponent,
    ListaproductoComponent,
    CocheComponent,
    ConcesionarioComponent,
    HijocontadorComponent,
    PadrecontadoresComponent,
    LibreriaComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
