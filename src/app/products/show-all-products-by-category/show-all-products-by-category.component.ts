import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Category } from 'src/app/app-framework/category';
@Component({
  selector: 'app-show-all-products-by-category',
  templateUrl: './show-all-products-by-category.component.html',
  styleUrls: ['./show-all-products-by-category.component.css']
})
export class ShowAllProductsByCategoryComponent implements OnInit {
  
  searchCategory = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(data => {

      this.searchCategory = data.category;
      
    });
  }

}
