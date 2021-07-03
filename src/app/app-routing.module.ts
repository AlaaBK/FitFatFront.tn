import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogsComponent} from "./blogs/blogs.component";
import {AddBlogComponent} from "./add-blog/add-blog.component";
import {ShowBlogComponent} from "./show-blog/show-blog.component";
import {AdminBlogComponent} from "./admin-blog/admin-blog.component";
import {EditBlogComponent} from "./edit-blog/edit-blog.component";
import {DeleteBlogComponent} from "./delete-blog/delete-blog.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [

  { path: 'blogs', component: BlogsComponent  },
  { path: 'add-blog', component: AddBlogComponent  },
  { path: 'show-blog/:id', component: ShowBlogComponent },
  { path: 'admin-blog', component: AdminBlogComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent  },
  { path: 'delete-blog/:id', component: DeleteBlogComponent  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
