import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simple-loader',
  templateUrl: './simple-loader.component.html',
  styleUrls: ['./simple-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
