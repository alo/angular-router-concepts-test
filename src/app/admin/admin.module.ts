import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, pathMatch: 'full'},
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
  { path: 'module2', loadChildren: 'app/module2/module2.module#Module2Module'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
  declarations: [NavigationComponent]
})
export class AdminModule { }
