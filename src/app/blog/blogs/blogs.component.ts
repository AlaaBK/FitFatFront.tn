import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {Blog} from "../Model/blog";
import {Product} from "../../products/product";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  listeBlogs : Blog[]=[];
  constructor(private serviceBlog : BlogService) { }

  ngOnInit(): void {
    this.serviceBlog.getBlogs().subscribe((result)=>{

      this.listeBlogs= result['hydra:member'];
    });
  }
}
