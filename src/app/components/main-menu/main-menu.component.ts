import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { CredentialsStorage } from './../../modules/auth/classes/credentials.store';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent {

  public sideNavAvailable:boolean = false;
  private credentialsStorage:CredentialsStorage = new CredentialsStorage();

  constructor(protected router:Router) { }

  public navigateHome(){
    this.router.navigate(['/home']);
  }

  public isLoggedIn() {
    return this.credentialsStorage.isCredentilsSet();
  }
  public login(){
    this.router.navigate(['auth/login']);
  }  
  public logout(){
    this.router.navigate(['auth/logout']);
  }


}
