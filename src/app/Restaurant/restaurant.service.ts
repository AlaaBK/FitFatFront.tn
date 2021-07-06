import { Injectable } from '@angular/core';
import { Restaurant } from "./restaurant";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private httpClient: HttpClient) { }
  restauranturl:string =  'http://127.0.0.1:8000/api/restaurants';

  getAllRestaurants(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.restauranturl);
  }

  ShowRestaurant(restaurantID): Observable<Restaurant>{
    const restauranturl = 'http://127.0.0.1:8000/api/restaurants/'+ restaurantID;

    return this.httpClient.get<Restaurant>(restauranturl);
  }

  addRestaurant(Restaurant: Restaurant) {
    return this.httpClient.post(this.restauranturl, Restaurant, {responseType: 'json'});
  }

  updateRestaurant(restaurantID, restaurantBody): Observable<Restaurant>{
    const restauranturl = 'http://127.0.0.1:8000/api/restaurants/'+ restaurantID;
    return this.httpClient.put<Restaurant>(restauranturl, restaurantBody); // return an observable
  }

  deleteRestaurant(restaurantID): Observable<Restaurant>{
    const productUrl = 'http://127.0.0.1:8000/api/restaurants/' + restaurantID;
    return this.httpClient.delete<Restaurant>(this.restauranturl); // return an observable
  }


  /* AjouterRestaurant(): Observable<Restaurant[]>{
     return this.httpClient.post<Restaurant>(this.restauranturl);
   }*/





}

