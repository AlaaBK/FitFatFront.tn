import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {Router} from "@angular/router";
import {Blog} from "../Model/blog";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  messageUser : string = "";
  blog : Blog = new Blog("","","","");
  constructor(private serviceBlog : BlogService, private router: Router) { }

  ngOnInit(): void {
  }
  Save(form:any){
    this.serviceBlog.addBlog(form).subscribe(()=>{
      this.messageUser = "Votre article à été bien enregistré, un administrateur va le consulter";
      setTimeout(() => {
        this.router.navigate(['/blogs']);
      }, 1500);
    });
  }

}
