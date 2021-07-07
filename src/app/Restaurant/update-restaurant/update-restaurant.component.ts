import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  restaurantId : number;

  restaurantDetails: Restaurant;
  editForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.restaurantId = data.id;

      this.restaurantService.ShowRestaurant(this.restaurantId).subscribe(restaurantData => {
        this.restaurantDetails = restaurantData; // get the existing data of the Restaurant
        console.log(this.restaurantDetails);
      });

    });
  }

  updateRestaurant(form){

    console.log(form);

    const updateRestaurant = {
      id: form.value.id,
      nom: form.value.nom,
      description: form.value.description,
      adresse: form.value.adresse,
      telephone: form.value.telephone

    };

    this.restaurantService.updateRestaurant(this.restaurantId, updateRestaurant).subscribe(data => {
      console.log(data);
      this.router.navigate(['http://localhost:4200/showAllRestaurant']);
    });

  }

}
