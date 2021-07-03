import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { OrdersModule } from './orders/orders.module';
import { AppFrameworkModule } from './app-framework/app-framework.module';
import { HttpClientModule } from '@angular/common/http';

import { ShowAllRestaurantComponent } from "./Restaurant/show-all-restaurant/show-all-restaurant.component";
/*
import { AjouterRestaurantComponent } from './Restaurant/ajouter-restaurant/ajouter-restaurant.component';
import { ShowRestaurantComponent } from './Restaurant/show-restaurant/show-restaurant.component';
import { DeleteRestaurantComponent } from './Restaurant/delete-restaurant/delete-restaurant.component';
import { UpdateRestaurantComponent } from './Restaurant/update-restaurant/update-restaurant.component';*/
@NgModule({
  declarations: [
    AppComponent,
    ShowAllRestaurantComponent
   /*, AjouterRestaurantComponent,
    ShowRestaurantComponent,

    DeleteRestaurantComponent,
    UpdateRestaurantComponent*/],

  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,

    HttpClientModule,
    OrdersModule,
    AppFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class appModule{}
