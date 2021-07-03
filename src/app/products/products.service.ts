import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product'
import { Observable } from 'rxjs';

import { Category } from '../app-framework/category';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }
  productUrl:string =  'http://127.0.0.1:8000/api/products';
  //productUrl:string =  'http://localhost:3000/products'
  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productUrl); 
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://127.0.0.1:8000/api/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  ShowProduct(productId): Observable<Product>{
    const productUrl = 'http://127.0.0.1:8000/api/products/'+ productId;
    return this.httpClient.get<Product>(this.productUrl); // return an observable
  }



}

