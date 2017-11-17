import { Component, ViewEncapsulation } from '@angular/core';
import { RequestService } from './../../../../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';

import { CredentialsStorage } from './../../../auth/classes/credentials.store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent {

  public galleryImages: Array<string> = new Array();

  public description:string;
  public name:string;
  public price:number;
  private id:number;

  private credentialsStorage:CredentialsStorage = new CredentialsStorage();

  constructor(protected requestService: RequestService, private activatedRoute: ActivatedRoute, private router:Router) {

    this.activatedRoute.params.subscribe(params => {
      this.loadRobot(params.robotId);
    });
  }


  public isLoggedin():boolean {
    return this.credentialsStorage.isCredentilsSet();
  }

  async loadRobot(robotId) {

    try {

      let response: any = await this.requestService.get(`/robot/${robotId}`).toPromise();
      
      if (response.body.status != true || !response.body.data) {
        throw -1;
      }

      // Set the data
      this.name        = response.body.data.name;
      this.description = response.body.data.description;
      this.price       = response.body.data.price;
      this.id          = response.body.data.id;

      for(let photo of response.body.data.photos) {
        this.galleryImages.push(photo.url);
      }

    } catch (err) {
      this.router.navigate(["page not found"]); // Redirect to the page does not exists
    }

  }

  public async delete() {

    try {

      let answer = confirm(`Are you sure that you want to delete the robot ${this.id}?`);
      if (answer) {
        let response = await this.requestService.delete("/robot/" + this.id).toPromise(); // Delete the robot
        this.router.navigate([""]); // Go to the home page.
      } 

    } catch(err){
      alert("Oopes something went wrong while trying to delete the robot. Please try again.");
    }
  }

}