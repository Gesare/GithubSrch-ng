import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { UserformComponent } from '../userform/userform.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
    {path:'userform', component: UserformComponent},
    {path:'user/:username', component: UserComponent}
    ];
    
    @NgModule({
      imports: [CommonModule,
        RouterModule.forRoot(routes)],
      exports: [RouterModule],
      declarations: []
    })

export class RoutingModule { }