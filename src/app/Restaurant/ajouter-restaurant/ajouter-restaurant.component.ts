import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../restaurant";
import {RestaurantService} from "../restaurant.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent implements OnInit {
  restaurantlist: Restaurant[]=[] ;
  productId = 0;

  constructor(private restaurantService: RestaurantService, private router:Router) { }

  ngOnInit(): void  {
    this.restaurantService.getAllRestaurants().subscribe( data =>
    { this.restaurantlist = data['hydra:member'];

    });
}}
