import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Blog} from "./Model/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllBlogs(){
    return this.http.get("http://localhost:3000/blog");
  }

  getBlogs(){
    return this.http.get("http://localhost:3000/blog"  , { params: {publique: "yes"}});
  }

  getBlog(id: any){
    let param: any = {'id': id};
    return this.http.get("http://localhost:3000/blog"  , {params: param});
  }

  addBlog(blog:any){
    return this.http.post("http://localhost:3000/blog", blog);
  }

  deleteBlog(id: any){
    return this.http.delete("http://localhost:3000/blog/" + id);
  }

  editBlog(blog: any, id:any){
    return this.http.put("http://localhost:3000/blog/" + id, blog);
  }
}
