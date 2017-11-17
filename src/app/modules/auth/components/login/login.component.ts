import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterStateSnapshot, NavigationEnd } from '@angular/router';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { RequestService } from './../../../../services/request.service';

import { CredentialsStorage } from './../../classes/credentials.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  private credentialsStorage:CredentialsStorage = new CredentialsStorage();

  // Define form models fields
  public username:string; // Login password
  public password:string; // Login password

  // Define form elements
  public loginForm: FormGroup;
  public usernameFormControl:FormControl;  
  public passwordFromControl:FormControl; 

  public isLoading:boolean = false;
  public errorMessage:string = "";

  constructor(private requestService:RequestService, private router:Router) {

    this.usernameFormControl = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]);
    this.passwordFromControl = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]);

    this.loginForm = new FormGroup({ username: this.usernameFormControl, password: this.passwordFromControl });
  }

  ngOnInit() {
  }


  public async login(){

    // Lock the method
    if(this.isLoading) {
      return;
    }

    this.errorMessage = "";
    this.isLoading = true;

    try {

      this.credentialsStorage.save(this.username, this.password);
      let response:any = await this.requestService.post("/login", {}).toPromise();

      if(response.body.status != true) {
        throw -1;
      }

      // Redirect the user to the page where he is coming from
  //    const redirectURL = this.credentialsStorage.redirectURL? this.credentialsStorage.redirectURL : "";
//      this.credentialsStorage.clearRedirectURL();   // Only use once 
      this.router.navigate([""]);

    } catch(err) {

      // Clear the credentials
      this.credentialsStorage.clear();

      this.isLoading = false;
      this.errorMessage = "Wrong username or password";
    }

  }

}
