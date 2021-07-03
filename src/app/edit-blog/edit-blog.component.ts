import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  id :any;
  blog : any;
  messageUser :any;
  constructor(private serviceBlog : BlogService,private activatedroute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.serviceBlog.getBlog(this.id).subscribe((result)=>{
      this.blog= result;
    });
  }

  edit(blog: any){

    this.serviceBlog.editBlog( blog , this.id ).subscribe();
    this.messageUser = "Article modifié avec succées !";
    setTimeout(() => {
      this.router.navigate(['/admin-blog']);
    }, 1500);

  }

}
