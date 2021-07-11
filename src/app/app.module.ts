import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersModule } from './orders/orders.module';
import { AppFrameworkModule } from './app-framework/app-framework.module';
import { HttpClientModule } from '@angular/common/http';

import { ShowAllRestaurantComponent } from "./Restaurant/show-all-restaurant/show-all-restaurant.component";
import { BlogsComponent } from './Blog/blogs/blogs.component';
import { DeleteBlogComponent } from './Blog/delete-blog/delete-blog.component';
import { EditBlogComponent } from './Blog/edit-blog/edit-blog.component';
import { AdminBlogComponent } from './Blog/admin-blog/admin-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowBlogComponent } from './Blog/show-blog/show-blog.component';
import { AjouterRestaurantComponent } from './Restaurant/ajouter-restaurant/ajouter-restaurant.component';
import { ShowRestaurantComponent } from './Restaurant/show-restaurant/show-restaurant.component';
import { DeleteRestaurantComponent } from './Restaurant/delete-restaurant/delete-restaurant.component';
import { UpdateRestaurantComponent } from './Restaurant/update-restaurant/update-restaurant.component';
import {CommonModule} from "@angular/common";
import { RechercheparadresseComponent } from './Restaurant/rechercheparadresse/rechercheparadresse.component';
import { AdminRestaurantListComponent } from './Restaurant/admin-restaurant-list/admin-restaurant-list.component';
import { ResponsableRestaurantViewComponent } from './Restaurant/responsable-restaurant-view/responsable-restaurant-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllRestaurantComponent,
    BlogsComponent,
    DeleteBlogComponent,
    EditBlogComponent,
    AdminBlogComponent,
    AddBlogComponent,
    NotFoundComponent,
    ShowBlogComponent,
    AjouterRestaurantComponent,
    ShowRestaurantComponent,
    DeleteRestaurantComponent,
    UpdateRestaurantComponent,
    RechercheparadresseComponent,
    AdminRestaurantListComponent,
    ResponsableRestaurantViewComponent],


  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrdersModule,
    ReactiveFormsModule,
    AppFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class appModule{}
