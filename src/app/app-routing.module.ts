import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BlogsComponent} from "./blog/blogs/blogs.component";
import {AddBlogComponent} from "./blog/add-blog/add-blog.component";
import {ShowBlogComponent} from "./blog/show-blog/show-blog.component";
import {AdminBlogComponent} from "./blog/admin-blog/admin-blog.component";
import {EditBlogComponent} from "./blog/edit-blog/edit-blog.component";
import {DeleteBlogComponent} from "./blog/delete-blog/delete-blog.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import {ListUsersComponent} from "./user/list-users/list-users.component";
import {DeleteuserComponent} from "./user/deleteuser/deleteuser.component";
import {InscriptionComponent} from "./user/inscription/inscription.component";
import {UpdateuserComponent} from "./user/updateuser/updateuser.component";

const routes: Routes = [

  { path: 'blogs', component: BlogsComponent  },
  { path: 'add-blog', component: AddBlogComponent  },
  { path: 'show-blog/:id', component: ShowBlogComponent },
  { path: 'admin-blog', component: AdminBlogComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent  },
  { path: 'delete-blog/:id', component: DeleteBlogComponent  },
  // { path: '**', component: NotFoundComponent },
  { path: 'listusers', component: ListUsersComponent  },
  { path: 'inscription', component: InscriptionComponent  },
  { path: 'deleteuser/:id', component: DeleteuserComponent  },
  { path: 'inscription', component: InscriptionComponent  },
  { path: 'updateuser/:id', component: UpdateuserComponent  },
  //{ path: 'profiluser/:id', component:  ProfiluserComponent },
  // { path: '**', component: NotFoundComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent},
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
