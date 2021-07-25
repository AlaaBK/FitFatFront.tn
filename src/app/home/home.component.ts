import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog/blog.service";
import {Blog} from "../blog/Model/blog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blog: Blog
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      let array = data['hydra:member']
      //this.image = array[array.length -1].image
      this.blog = array[array.length -1]
    })

  }

}
