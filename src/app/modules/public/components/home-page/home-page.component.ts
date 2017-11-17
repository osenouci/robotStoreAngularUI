import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RequestService } from './../../../../services/request.service';
import { Robot } from './../../classes/robot';
import { Router } from '@angular/router';

import { CredentialsStorage } from './../../../auth/classes/credentials.store';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  public robots:Array<Robot> = new Array();
  public categoryId:number = 0;

  public credentialsStorage:CredentialsStorage = new CredentialsStorage();

  constructor(protected requestService: RequestService, private router:Router) { }

  ngOnInit() {
    this.loadRobots();
  }

  async loadRobots() {
    
    try {

      let response: any = await this.requestService.get("/robot").toPromise();

      if (response.body.status == true && response.body.data) {

         for (let entry of response.body.data) {
           this.robots.push(new Robot(entry.id, entry.name, entry.description, entry.price, entry.photo, entry.categoryId));
         }
      }

    } catch (err) {
      console.log(err);
    }

  }  

  public onCategoryUpdate(categoryId) {
    this.categoryId = categoryId;
  }

  public navigateToAddRobotForm(){
    this.router.navigate(['add']);
  }

  public isLoggedIn():boolean {
    return this.credentialsStorage.isCredentilsSet();
  }
}
