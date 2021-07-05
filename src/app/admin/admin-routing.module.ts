import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { AdminComponent } from './admin.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { ProductTableComponent } from './product-table/product-table.component';

const routes: Routes = [
  { path: '', component: AdminComponent },

  { path: 'ProductTable', component: ProductTableComponent },
  { path: 'CategoryTable', component: CategoryTableComponent }

  
  ];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
