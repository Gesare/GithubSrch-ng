import { Injectable } from '@angular/core';
import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  repos:Repositories[];
  
  constructor( private http:HttpClient) { 
    // this.repos=new Repository("","",new Date());
    this.repos=[];
  }
  repoRequest(username){
    interface ApiResponse{
      name:string;
      html_url:string;
      created_at:Date;
    }
    let promise= new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+username+"/repos?access_token="+environment.key).toPromise().then(response=>{
        
      for(var i in response)
        this.repos.push(response[i])
 
        resolve()
      },
      error=>{
        reject(error)
      })
    })
    return promise
  }
}