import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
//import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-show-all-restaurant',
  templateUrl: './show-all-restaurant.component.html',
  styleUrls: ['./show-all-restaurant.component.css']
})
export class ShowAllRestaurantComponent implements OnInit {

  restaurantList: Restaurant[]=[] ;
  //productId = 0;
  constructor(private restaurantService: RestaurantService, private router:Router) { }

  ngOnInit(): void  {
    this.restaurantService.getAllRestaurants().subscribe( data =>
    { this.restaurantList = data['hydra:member'];

    });



  }

}



