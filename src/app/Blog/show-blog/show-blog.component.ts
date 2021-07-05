import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {
  id :any;
  blog :any;
  constructor(private serviceBlog : BlogService,private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.serviceBlog.getBlog(this.id).subscribe((result)=>{
      this.blog= result;
    });
  }

}
