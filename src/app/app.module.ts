import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { noop } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRountingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
   
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRountingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
