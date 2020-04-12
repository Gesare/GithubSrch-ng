import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
{path:'userform', component: UserformComponent},
{path:'user/:username', component: UserComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
