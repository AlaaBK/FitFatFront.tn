import { Component, OnInit } from '@angular/core';
import {Product} from "../../products/product";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../products/products.service";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  userId: number;

  userDetails: User;
  editForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private UserService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;

      this.UserService.ShowUser(this.userId).subscribe(userData => {
        this.userDetails = userData;
        console.log(this.userDetails);
      });

    });
  }


  updateUser(form) {

    console.log(form);

    const updateUser = {
      id: form.value.id,
      username: form.value.username,
      roles: form.value.roles,
      email: form.value.email,
      name: form.value.name

    };

    this.UserService.updateUser(this.userId, updateUser).subscribe(data => {
      console.log(data);
      this.router.navigate(['/listusers']);
    });

  }

}
