import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AgendaPageComponent } from './agenda-page/agenda-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { InfosPageComponent } from './infos-page/infos-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    AgendaPageComponent,
    MapPageComponent,
    ContactPageComponent,
    NavbarComponent,
    AdministrationPageComponent,
    InfosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
