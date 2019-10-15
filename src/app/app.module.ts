import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PositionComponent } from './position/position.component';
import { CardsComponent } from './cards/cards.component';
import { RaiseFoldButtonsComponent } from './raise-fold-buttons/raise-fold-buttons.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PositionComponent,
    CardsComponent,
    RaiseFoldButtonsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
