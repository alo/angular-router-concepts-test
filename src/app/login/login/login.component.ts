import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="onSelect($event)">Go to logged in zone</button>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }
  onSelect({ selected }) {
    this.router.navigate(['/admin']);
  }

}
