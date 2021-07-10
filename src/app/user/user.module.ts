import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    ListUsersComponent,
    InscriptionComponent,
    DeleteuserComponent,
    UpdateuserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UserModule { }
