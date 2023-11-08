import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import { AppComponent } from './app.component';
import { MoviesPipe } from './pipes/movies.pipe';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    MoviesPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
