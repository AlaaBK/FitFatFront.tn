import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import {ShowAllRestaurantComponent} from "./Restaurant/show-all-restaurant/show-all-restaurant.component";
import {BlogsComponent} from "./blog/blogs/blogs.component";
import {AddBlogComponent} from "./blog/add-blog/add-blog.component";
import {ShowBlogComponent} from "./blog/show-blog/show-blog.component";
import {AdminBlogComponent} from "./blog/admin-blog/admin-blog.component";
import {EditBlogComponent} from "./blog/edit-blog/edit-blog.component";
import {DeleteBlogComponent} from "./blog/delete-blog/delete-blog.component";
// import {NotFoundComponent} from "./not-found/not-found.component";
import {AjouterRestaurantComponent} from "./Restaurant/ajouter-restaurant/ajouter-restaurant.component";
import {ShowRestaurantComponent} from "./Restaurant/show-restaurant/show-restaurant.component";
import {DeleteRestaurantComponent} from "./Restaurant/delete-restaurant/delete-restaurant.component";
import {UpdateRestaurantComponent} from "./Restaurant/update-restaurant/update-restaurant.component";
import {AdminRestaurantListComponent} from "./admin/admin-restaurant-list/admin-restaurant-list.component";
import {ResponsableRestaurantViewComponent} from "./Restaurant/responsable-restaurant-view/responsable-restaurant-view.component";
import {GetRestaurantbyAdresseComponent} from "./Restaurant/get-restaurantby-adresse/get-restaurantby-adresse.component";
import {GetRestaurantbyNomComponent} from "./Restaurant/get-restaurantby-nom/get-restaurantby-nom.component";

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';

import {ShowProductComponent} from './products/show-product/show-product.component';
import {ShowAllProductsComponent} from './products/show-all-products/show-all-products.component'
// import { ShowAllProductsByCategoryComponent } from './products/show-all-products-by-category/show-all-products-by-category.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';

import {ListUsersComponent} from "./user/list-users/list-users.component";
import {DeleteuserComponent} from "./user/deleteuser/deleteuser.component";
import {InscriptionComponent} from "./user/inscription/inscription.component";
import {UpdateuserComponent} from "./user/updateuser/updateuser.component";

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'blogs', component: BlogsComponent  },
  { path: 'add-blog', component: AddBlogComponent  },
  { path: 'show-blog/:id', component: ShowBlogComponent },
  { path: 'admin-blog', component: AdminBlogComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent  },
  { path: 'delete-blog/:id', component: DeleteBlogComponent  },
 // { path: '**', component: NotFoundComponent },

  { path: 'addProduct', component: AddProductComponent },
  { path: 'showProduct/:id', component: ShowProductComponent },
  { path: 'showAllProducts', component: ShowAllProductsComponent },
  // { path: 'category/:Category', component: ShowAllProductsByCategoryComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent},
  { path: 'listusers', component: ListUsersComponent  },
  { path: 'inscription', component: InscriptionComponent  },
  { path: 'deleteuser/:id', component: DeleteuserComponent  },
  { path: 'inscription', component: InscriptionComponent  },
  { path: 'updateuser/:id', component: UpdateuserComponent  },
  //{ path: 'profiluser/:id', component:  ProfiluserComponent },
  // { path: '**', component: NotFoundComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent},

  { path: 'showAllRestaurant', component: ShowAllRestaurantComponent },
  { path: 'AjouterRestaurantComponent', component: AjouterRestaurantComponent },
  { path: 'DeleteRestaurantComponent/:id', component: DeleteRestaurantComponent },
  { path: 'ShowRestaurantComponent/:id', component: ShowRestaurantComponent },
  { path: 'UpdateRestaurantComponent/:id', component: UpdateRestaurantComponent },
  { path: 'AdminRestaurantList', component: AdminRestaurantListComponent},
  { path: 'ResponsableRestaurant/:id', component: ResponsableRestaurantViewComponent },
  { path: 'GetRestaurantbyAdresse/:adresse', component: GetRestaurantbyAdresseComponent },
  { path: 'GetRestaurantbyNom/:nom', component: GetRestaurantbyNomComponent },

  // { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(r => r.RestaurantModule) }

  { path: 'category', loadChildren: () => import('./categories/category/category.module').then(m => m.CategoryModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'categoryTable', loadChildren: () => import('./admin/category-table/category-table.module').then(m => m.CategoryTableModule) },

  { path: 'user', loadChildren: () => import('./user/user.module').then(u => u.UserModule) }




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
