import { Injectable } from '@angular/core';
import { Restaurant } from "./restaurant";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private httpClient: HttpClient) { }
  restauranturl:string =  'http://127.0.0.1:8000/api/restaurants';
  getAllRestaurants(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.restauranturl);
  }

  showRestaurant(restaurantID): Observable<Restaurant>{
    const restauranturl = 'http://127.0.0.1:8000/api/restaurants/'+ restaurantID;
    return this.httpClient.get<Restaurant>(this.restauranturl); // return an observable
  }
 /* AjouterRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.post<Restaurant>(this.restauranturl);
  }*/





}

