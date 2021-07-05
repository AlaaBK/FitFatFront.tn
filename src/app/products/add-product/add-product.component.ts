import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private productsService: ProductsService) { }
  addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      //id: [],
      nom: ['', Validators.required],
      description: ['', Validators.required],
      prix: [, Validators.required],
      Category: ['', Validators.required]
     
    });
  }
    onSubmit() {
      this.productsService.addProduct(this.addForm.value)
        .subscribe( data => {
          console.log(data);
         this.router.navigate(['']);
        });
    }
  

}
