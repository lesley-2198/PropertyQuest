import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { SellComponent } from './sell/sell.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyComponent,
    RentComponent,
    SellComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // Needed for ngModel
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule, // For the input field
    MatFormFieldModule // For the form field
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
