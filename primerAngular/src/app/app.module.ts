import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimerComponente } from './../components/primerCompnents/primercomponent.components';
import { CicloVida } from '../components/ciclosvida/ciclovidas.components';
import { Deporte } from './../components/deportes/deporte.components';
import { NumeroAleatorio} from "../components/numeroalteatorio/numeroaleat.component";
import { PositivoNegativo} from "./../components/positivo_negativo/positivonegativo.component"

@NgModule({
  declarations: [AppComponent, PrimerComponente, CicloVida, Deporte,NumeroAleatorio,PositivoNegativo],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
