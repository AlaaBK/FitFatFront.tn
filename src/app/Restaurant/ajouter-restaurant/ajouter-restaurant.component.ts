import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService, private router:Router) { }
  addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      //id: [],
      nom: ['', Validators.required],
      description: ['', Validators.required],
      adresse: [, Validators.required],
      telephone: ['', Validators.required]

    });
  }
  onSubmit() {
    this.restaurantService.addRestaurant(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
}}
