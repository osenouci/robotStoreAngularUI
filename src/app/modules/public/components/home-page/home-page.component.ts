import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RequestService } from './../../../../services/request.service';
import { Robot } from './../../classes/robot';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  public robots:Array<Robot> = new Array();

  constructor(protected requestService: RequestService) { }

  ngOnInit() {
    this.loadRobots();
  }


  async loadRobots() {
    
    try {

      let response: any = await this.requestService.get("/robot").toPromise();

      if (response.body.status == true && response.body.data) {

         for (let entry of response.body.data) {
           this.robots.push(new Robot(entry.id, entry.name, entry.description, entry.price, entry.photo));
         }

         console.log("Robotos loaded: ", this.robots)
      }

    } catch (err) {
      console.log(err);
    }

  }  

}
