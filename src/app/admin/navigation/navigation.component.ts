import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  template: `
    <div>
      Menu
      <nav>
      <ul class="nav nav-pills">
      <li routerLinkActive="active"> <a routerLink="users">users</a></li>
      <li routerLinkActive="active"> <a routerLink="module2">module2</a></li>
    </ul>
      <!--
        <a 
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.name }}
        </a>
        -->
      </nav>
    </div>

    <div>
      Content
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {

    nav = [
    {
      link: '/users',
      name: 'users',
      exact: true
    },
    {
      link: '/module2',
      name: 'module2',
      exact: true
    }
  ];
  constructor(private router: Router) { }

}