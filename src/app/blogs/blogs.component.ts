import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  listeBlogs : any;
  constructor(private serviceBlog : BlogService) { }

  ngOnInit(): void {
    this.serviceBlog.getBlogs().subscribe((result)=>{
      console.log("====> ", result)
      this.listeBlogs= result;
    });
  }
}
