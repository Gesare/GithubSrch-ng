import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserRequestService } from '../user-http/user-request.service';
import { RepoRequestService } from '../repo-http/repo-request.service';
import { Repositories } from '../repositories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  repos: Repositories[];


  constructor(private userService: UserRequestService, private repoService: RepoRequestService, private route: ActivatedRoute, private router:Router) {
  
  }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username');
    this.userService.userRequest(username)
    this.repoService.repoRequest(username);
    this.user = this.userService.user
    this.repos = this.repoService.repos;
  }


}
