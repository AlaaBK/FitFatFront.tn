import { Component, OnInit, ViewChild } from '@angular/core';
import {BlogService} from "../blog.service";
import {Router} from "@angular/router";
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  messageUser : string = "";
  ckeditorContent: string
  ckeConfig: CKEDITOR.config
  constructor(private serviceBlog : BlogService, private router: Router) { }
  @ViewChild("myckeditor") ckeditor: CKEditorComponent;
  ngOnInit(): void {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      removePlugins: 'exportpdf'
    };
  }
  Save(form:any){
    var content = CKEDITOR.instances.editor1.getSnapshot().replace(/<\/?[^>]+(>|$)/g, "")
    let addedBlog = {
      title : form.title,
      createdBy : form.createdBy,
      content : content,
      publique : form.publique,
    }

    this.serviceBlog.addBlog(addedBlog).subscribe(()=>{
      this.messageUser = "Votre article à été bien enregistré, un administrateur va le consulter";
      setTimeout(() => {
        this.router.navigate(['/blogs']);
      }, 1500);
    });
  }


}
