import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { ProductsService } from '../products.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  selectedFile: ImageSnippet;
  constructor(private formBuilder: FormBuilder,private router: Router, private productsService: ProductsService) { }
  addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      //id: [],
      nom: ['', Validators.required],
      description: ['', Validators.required],
      prix: [, Validators.required],
      Category: ['', Validators.required],
      img: ['', Validators.required],

    });
  }


  get f() { return this.addForm.controls; }
    onSubmit() {
      this.productsService.addProduct(this.addForm.value)
        .subscribe( data => {
          console.log(data);
         this.router.navigate(['']);
        });
    }

    // processFile(imageInput: any) {
    //   const file: File = imageInput.files[0];
    //   const reader = new FileReader();

    //   reader.addEventListener('load', (event: any) => {

    //     this.selectedFile = new ImageSnippet(event.target.result, file);

    //     this.productsService.uploadImage(this.selectedFile.file).subscribe(
    //       (res) => {

    //       },
    //       (err) => {

    //       })
    //   });

    //   reader.readAsDataURL(file);
    // }


}
