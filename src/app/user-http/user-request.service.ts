import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user: User;
  constructor(private http: HttpClient) {
    this.user = new User("","","","",0);
   }
  
   userRequest(username){
    interface ApiResponse{
      login:string;
      name:string;
      html_url:string;
      avatar_url:string;
      public_repos:number;

    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+username+"?access_token="+environment.key).toPromise().then(response=>{
        this.user.login = response.login
        this.user.name = response.name
        this.user.html_url = response.html_url
        this.user.avatar_url = response.avatar_url
        this.user.public_repos = response.public_repos
        resolve()
      },
      error=>{

        reject(error)
      })
    })
    return promise
   }
}
