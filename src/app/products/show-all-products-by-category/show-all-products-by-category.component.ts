import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Category } from 'src/app/categories/category';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { CategoryService } from 'src/app/categories/category.service';
//import { Category } from 'src/app/app-framework/category';
@Component({
  selector: 'app-show-all-products-by-category',
  templateUrl: './show-all-products-by-category.component.html',
  styleUrls: ['./show-all-products-by-category.component.css']
})
export class ShowAllProductsByCategoryComponent implements OnInit {
  

  CategoryNom : any;
  searchCategory: Category;
  productList: Product[]=[];
  categoryList: Category[]=[];
  categoryid:BigInteger;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.CategoryNom = data.nom;
   

      console.log(data)
    });
    this.categoryService.getCategoryByNom(this.CategoryNom).subscribe((result)=>{

      this.categoryList= result['hydra:member'];
    });

      //  for (let entry of this.categoryList) {
  //       console.log(entry); 
        
        this.productsService.searchProductsByCategory(this.categoryid).subscribe((result)=>{

           this.productList= result['hydra:member'];
           console.log("====> ", result);

     });
    
    

  };

}
// }