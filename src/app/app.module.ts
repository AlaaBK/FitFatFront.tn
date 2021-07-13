import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersModule } from './orders/orders.module';
import { AppFrameworkModule } from './app-framework/app-framework.module';
import { HttpClientModule } from '@angular/common/http';

import { ShowAllRestaurantComponent } from "./Restaurant/show-all-restaurant/show-all-restaurant.component";

import { AjouterRestaurantComponent } from './Restaurant/ajouter-restaurant/ajouter-restaurant.component';
import { ShowRestaurantComponent } from './Restaurant/show-restaurant/show-restaurant.component';
import { DeleteRestaurantComponent } from './Restaurant/delete-restaurant/delete-restaurant.component';
import { UpdateRestaurantComponent } from './Restaurant/update-restaurant/update-restaurant.component';
import {CommonModule} from "@angular/common";
import { RechercheparadresseComponent } from './Restaurant/rechercheparadresse/rechercheparadresse.component';
import { AdminRestaurantListComponent } from './admin/admin-restaurant-list/admin-restaurant-list.component';
import { ResponsableRestaurantViewComponent } from './Restaurant/responsable-restaurant-view/responsable-restaurant-view.component';
import { GetRestaurantbyAdresseComponent } from './Restaurant/get-restaurantby-adresse/get-restaurantby-adresse.component';
import { GetRestaurantbyNomComponent } from './Restaurant/get-restaurantby-nom/get-restaurantby-nom.component';

import { BlogsComponent } from './blog/blogs/blogs.component';
import { DeleteBlogComponent } from './blog/delete-blog/delete-blog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { AdminBlogComponent } from './blog/admin-blog/admin-blog.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowBlogComponent } from './blog/show-blog/show-blog.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { ProductTableComponent } from './admin/product-table/product-table.component';

import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { MatTableModule } from '@angular/material/table'
import { CKEditorModule} from 'ng2-ckeditor';


@NgModule({
  declarations: [
    AppComponent,
    ShowAllRestaurantComponent,


    ProductTableComponent,


    BlogsComponent,
    DeleteBlogComponent,
    EditBlogComponent,
    AdminBlogComponent,
    AddBlogComponent,
    NotFoundComponent,
    ShowBlogComponent,

    AjouterRestaurantComponent,
    ShowRestaurantComponent,
    HomeComponent,
    DeleteRestaurantComponent,
    UpdateRestaurantComponent,
    RechercheparadresseComponent,
    AdminRestaurantListComponent,
    ResponsableRestaurantViewComponent,
    GetRestaurantbyAdresseComponent,
    GetRestaurantbyNomComponent],




  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrdersModule,
    ReactiveFormsModule,
    AppFrameworkModule,
    NgbModule,
    MatSliderModule,
    SidebarModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatTableModule,


    CKEditorModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})


export class AppModule { }

