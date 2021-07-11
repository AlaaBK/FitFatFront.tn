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
  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productUrl); 
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://127.0.0.1:8000/api/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }
  searchCategoryProducts(Category): Observable<Product>{
    const productUrl = 'http://127.0.0.1:8000/api/products'+Category;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  ShowProduct(productId): Observable<Product>{
    const productUrl = 'http://127.0.0.1:8000/api/products/'+ productId;
   
    return this.httpClient.get<Product>(productUrl); 
  }

  addProduct(Product: Product) {
    return this.httpClient.post(this.productUrl, Product, {responseType: 'json'});
  }

  updateProduct(productId, productBody): Observable<Product>{
    const productUrl = 'http://127.0.0.1:8000/api/products/'+ productId;
    return this.httpClient.put<Product>(productUrl, productBody); // return an observable
  }

  deleteProduct(productId): Observable<Product>{
    const productUrl = 'http://127.0.0.1:8000/api/products/' + productId;
    return this.httpClient.delete<Product>(productUrl); // return an observable
  }

  public uploadImage(image: File): any {
    const formData = new FormData();

    formData.append('image', image);

    return this.httpClient.post('http://127.0.0.1:8000/api/products', formData);
    console.log(formData);
  }


}

