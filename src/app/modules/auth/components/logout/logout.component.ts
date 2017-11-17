import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { CredentialsStorage } from './../../classes/credentials.store';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    (new CredentialsStorage()).clear();
    this.router.navigate(['']);
  }

}
