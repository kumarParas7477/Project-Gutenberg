import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreCardComponent } from '../components/landing/genre-card/genre-card.component'
import { HeadingComponent } from '../components/landing/heading/heading.component'
import { LandingComponent } from '../containers/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { CardContainerComponent } from '../components/card-container/card-container.component';
import { GenreComponent } from 'src/containers/genre/genre.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GenreCardComponent,
    HeadingComponent,
    LandingComponent,
  GenreComponent,
  CardContainerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
