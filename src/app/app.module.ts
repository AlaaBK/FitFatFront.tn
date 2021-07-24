import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blog/blogs/blogs.component';
import { DeleteBlogComponent } from './blog/delete-blog/delete-blog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { AdminBlogComponent } from './blog/admin-blog/admin-blog.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowBlogComponent } from './blog/show-blog/show-blog.component';
import { OrdersModule } from './orders/orders.module';
import { AppFrameworkModule } from './app-framework/app-framework.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { ProductTableComponent } from './admin/product-table/product-table.component';

import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { MatTableModule } from '@angular/material/table'
import { CKEditorModule} from 'ng2-ckeditor';
import { AddCommentComponent } from './blog/add-comment/add-comment.component';
import { DeleteCommentComponent } from './blog/delete-comment/delete-comment.component';
import { AdminCommentComponent } from './blog/admin-comment/admin-comment.component';

@NgModule({
  declarations: [
    AppComponent,

    ProductTableComponent,

    BlogsComponent,
    DeleteBlogComponent,
    EditBlogComponent,
    AdminBlogComponent,
    AddBlogComponent,
    NotFoundComponent,
    ShowBlogComponent,
    HomeComponent,
    AddCommentComponent,
    DeleteCommentComponent,
    AdminCommentComponent,

  ],
  imports: [
    BrowserModule,
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

