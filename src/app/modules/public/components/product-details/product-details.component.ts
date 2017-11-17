import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RequestService } from './../../../../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {

  public galleryImages: Array<string> = new Array();

  public description:string;
  public name:string;
  public price:number;

  constructor(protected requestService: RequestService, private activatedRoute: ActivatedRoute, private router:Router) {

    this.activatedRoute.params.subscribe(params => {
      this.loadRobot(params.robotId);
    });




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

      for(let photo of response.body.data.photos) {
        this.galleryImages.push(photo.url);
      }

    } catch (err) {
      this.router.navigate(["page not found"]); // Redirect to the page does not exists
    }

  }

  ngOnInit() {

  }



}