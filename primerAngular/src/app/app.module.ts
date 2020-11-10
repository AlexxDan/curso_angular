import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimerComponente } from './../components/primerCompnents/primercomponent.components';
import { CicloVida } from '../components/ciclosvida/ciclovidas.components';
import { Deporte } from './../components/deportes/deporte.components';

@NgModule({
  declarations: [AppComponent, PrimerComponente, CicloVida, Deporte],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
