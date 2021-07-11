import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import {ShowAllRestaurantComponent} from "./Restaurant/show-all-restaurant/show-all-restaurant.component";



import {BlogsComponent} from "./Blog/blogs/blogs.component";
import {AddBlogComponent} from "./Blog/add-blog/add-blog.component";
import {ShowBlogComponent} from "./Blog/show-blog/show-blog.component";
import {AdminBlogComponent} from "./Blog/admin-blog/admin-blog.component";
import {EditBlogComponent} from "./Blog/edit-blog/edit-blog.component";
import {DeleteBlogComponent} from "./Blog/delete-blog/delete-blog.component";
// import {NotFoundComponent} from "./not-found/not-found.component";
import {AjouterRestaurantComponent} from "./Restaurant/ajouter-restaurant/ajouter-restaurant.component";
import {ShowRestaurantComponent} from "./Restaurant/show-restaurant/show-restaurant.component";
import {DeleteRestaurantComponent} from "./Restaurant/delete-restaurant/delete-restaurant.component";
import {UpdateRestaurantComponent} from "./Restaurant/update-restaurant/update-restaurant.component";
import {RechercheparadresseComponent} from "./Restaurant/rechercheparadresse/rechercheparadresse.component";
import {AdminRestaurantListComponent} from "./Restaurant/admin-restaurant-list/admin-restaurant-list.component";
import {ResponsableRestaurantViewComponent} from "./Restaurant/responsable-restaurant-view/responsable-restaurant-view.component";


const routes: Routes = [

  { path: 'blogs', component: BlogsComponent  },
  { path: 'add-blog', component: AddBlogComponent  },
  { path: 'show-blog/:id', component: ShowBlogComponent },
  { path: 'admin-blog', component: AdminBlogComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent  },
  { path: 'delete-blog/:id', component: DeleteBlogComponent  },
 // { path: '**', component: NotFoundComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent},

  { path: 'showAllRestaurant', component: ShowAllRestaurantComponent },
  { path: 'AjouterRestaurantComponent', component: AjouterRestaurantComponent },
  { path: 'DeleteRestaurantComponent/:id', component: DeleteRestaurantComponent },
  { path: 'ShowRestaurantComponent/:id', component: ShowRestaurantComponent },
  { path: 'UpdateRestaurantComponent/:id', component: UpdateRestaurantComponent },
  { path: 'recherche/:adresse', component: RechercheparadresseComponent },
  { path: 'AdminRestaurantList', component: AdminRestaurantListComponent},
  { path: 'ResponsableRestaurant/:id', component: ResponsableRestaurantViewComponent },

  // { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(r => r.RestaurantModule) }

  { path: 'category', loadChildren: () => import('./categories/category/category.module').then(m => m.CategoryModule) },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
