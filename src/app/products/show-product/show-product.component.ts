import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  productId = 0;
  productDetails: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

    c1 = 'c1';
    ngOnInit(): void {

      this.activatedRoute.params.subscribe(data => {
        this.productId = data.id;
      });
  
      this.productsService.ShowProduct(this.productId).subscribe(productData => {
        this.productDetails = productData;
      });
    }

}
