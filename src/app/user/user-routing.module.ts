import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'deleteuser', component: DeleteuserComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'listusers', component: ListUsersComponent },
  { path: 'updateuser/:id', component: UpdateuserComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
