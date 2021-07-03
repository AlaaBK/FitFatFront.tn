import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import {ShowAllRestaurantComponent} from "./Restaurant/show-all-restaurant/show-all-restaurant.component";


const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent},
  { path: 'showAllRestaurant', component: ShowAllRestaurantComponent },
 // { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(r => r.RestaurantModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
