import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  jsonToSend: string;


  constructor(private httpClient: HttpClient) {
  }

  userUrl: string = 'http://127.0.0.1:8000/api/users';

  //register and login
  registerUrl: string = 'http://127.0.0.1:8000/register';
  loginUrl: string = 'http://127.0.0.1:8000/login';

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl);
  }

  ShowUser(userId): Observable<User>{
    const userUrl = 'http://127.0.0.1:8000/api/users/'+ userId;

    return this.httpClient.get<User>(userUrl);
  }

  /*
  addUser(User: User) {
    return this.httpClient.post(this.userUrl, User, {responseType: 'json'});
  }

   */


  updateUser(userId, userBody): Observable<User>{
    const userUrl = 'http://127.0.0.1:8000/api/users/'+ userId;
    return this.httpClient.put<User>(userUrl, userBody); // return an observable
  }


  deleteUser(userId): Observable<User>{
    const userUrl = 'http://127.0.0.1:8000/api/users/' + userId;
    return this.httpClient.delete<User>(userUrl); // return an observable
  }






  //login and registration services




  addUser(user: User) {

    // new user have to be not verified until he confirm his registration
    user.verified = false;

    // call Symfony web service and transform user Object to Json using stringify
    return this.httpClient.post<User>(this.registerUrl, JSON.stringify(user), {headers: this.headers});

  }


  loginUser(user: User) {

    this.jsonToSend ="{\"username\": "+"\""+user.email+"\""+",\"password\": "+"\""+user.password+"\""+"}";
    return this.httpClient.post<User>(this.loginUrl, this.jsonToSend, {headers: this.headers});
  }
}
