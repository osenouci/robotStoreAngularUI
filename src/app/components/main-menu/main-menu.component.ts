import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent {

  constructor(protected router:Router) { }


  public navigateHome(){
    this.router.navigate(['/home']);
  }

  public isLoggedIn() {
    return false;
  }
  public login(){
    this.router.navigate(['auth/login']);
  }  
  public logout(){
    this.router.navigate(['auth/logout']);
  }


}
