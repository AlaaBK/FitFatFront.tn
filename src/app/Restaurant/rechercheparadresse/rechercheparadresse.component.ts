import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-rechercheparadresse',
  templateUrl: './rechercheparadresse.component.html',
  styleUrls: ['./rechercheparadresse.component.css']
})
export class RechercheparadresseComponent implements OnInit {

restaurantadresse='';
  restaurantList: Restaurant[]=[] ;

constructor(private activatedRoute: ActivatedRoute,
            private restaurantsService: RestaurantService,
            private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.restaurantadresse = data.adresse;

      console.log(data)
    });
    this.restaurantsService.getAllRestaurants().subscribe( data =>
    { this.restaurantList = data['hydra:member'];

    });
  /*
    this.activatedRoute.queryParams.subscribe(data => {
this.restaurantadresse = data.adresse;

    });
    this.restaurantsService.getAllRestaurants().subscribe( data =>
    { this.restaurantList = data['hydra:member'];

    });
    let i = 0;
    this.restaurantList.forEach(function (restaurant){


      // @ts-ignore
      let restaurantadresse1 = this.restaurantadresse;
      if (restaurant.adresse in restaurantadresse1){

        // @ts-ignore
        let Restaurantnewlist1[restaurant]=this.restaurantList;
        Restaurantnewlist1[i]=restaurant;

  i++
}
    });
    this.restaurantList = Restaurantnewlist1['hydra:member'];*/
  }

}
