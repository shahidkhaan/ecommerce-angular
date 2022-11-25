import { Router } from '@angular/router';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  login : string;

  title = 'MobileApp';
  constructor(private router: Router) {

   this.login = this.router.url;

   }

}


