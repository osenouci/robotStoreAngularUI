import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {

  public galleryImages:Array<string> = new Array();

  constructor() { }

  ngOnInit() {
    this.galleryImages.push('https://wallpaperscraft.com/image/milky_way_stars_ountains_night_germany_bavaria_sky_45888_1920x1080.jpg');
    this.galleryImages.push('https://static.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg');
    this.galleryImages.push('https://images7.alphacoders.com/411/thumb-1920-411820.jpg');
  }

  protected configureGallery() {

  }


}