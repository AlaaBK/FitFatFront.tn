import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {FormGroup, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  user: User;
  result: string;

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }


  registerUser() {


    //TODO: change role
    if (this.user.roles[0] == "u") {
      this.user.roles = ["UR"];
    } else if(this.user.roles[0] == "rr")
      this.user.roles = ["RR"];
    else
      this.user.roles =["ADMIN"];

    this.userService.addUser(this.user).subscribe(
      data => {
        alert('Welcome to fitfat');
        console.log('data type : ',typeof(data))
        console.log('data content : ',data);
        this.result = JSON.stringify(data);
        console.log('change data to string: ',typeof (this.result));

        this.router.navigate(['/login']);
      }
    );


    //TODO : manage the data before redirect to profile


  }
}
