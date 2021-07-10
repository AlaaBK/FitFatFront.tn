import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  userUrl: string = 'http://127.0.0.1:8000/api/users';

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl);
  }

  ShowUser(userId): Observable<User>{
    const userUrl = 'http://127.0.0.1:8000/api/users/'+ userId;

    return this.httpClient.get<User>(userUrl);
  }

  addUser(User: User) {
    return this.httpClient.post(this.userUrl, User, {responseType: 'json'});
  }


  updateUser(userId, userBody): Observable<User>{
    const userUrl = 'http://127.0.0.1:8000/api/users/'+ userId;
    return this.httpClient.put<User>(userUrl, userBody); // return an observable
  }


  deleteUser(userId): Observable<User>{
    const userUrl = 'http://127.0.0.1:8000/api/users/' + userId;
    return this.httpClient.delete<User>(userUrl); // return an observable
  }

}
