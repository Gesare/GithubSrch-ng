import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {


  goToUrl(username){
    this.router.navigate(['/user',username]);
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}