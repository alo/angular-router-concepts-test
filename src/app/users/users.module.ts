import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', component: UsersComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [UsersComponent]
})
export class UsersModule { }
