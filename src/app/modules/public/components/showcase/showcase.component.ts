import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Robot } from './../../classes/robot';

import { Router } from '@angular/router';

@Component({
  selector: 'showcase-list',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowcaseComponent implements OnInit {

  @Input() robots:Array<Robot>;
  @Input() categoryId:number = 0;

  public page: number = 1;
  public robotsPerPage:number = 8;
  constructor(protected router:Router) { }

  ngOnInit() {
    console.log(this.robots);
  }


  public showRobotDetails(robotId:number) {
    console.log();

    this.router.navigate([`details/${robotId}`]);
  }

}
