import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/categories/category';
import { ProductsService } from '../products.service';
import { Product } from '../product';
//import { Category } from 'src/app/app-framework/category';
@Component({
  selector: 'app-show-all-products-by-category',
  templateUrl: './show-all-products-by-category.component.html',
  styleUrls: ['./show-all-products-by-category.component.css']
})
export class ShowAllProductsByCategoryComponent implements OnInit {
  

  searchCategory: Category;
  productList: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      console.log(data);
      this.searchCategory = data.id;
      console.log(this.searchCategory);
      this.productsService.searchCategoryProducts(this.searchCategory).subscribe(categoryData => {
        console.log(categoryData);
        this.productList = categoryData;
      });
    });
  }

}
