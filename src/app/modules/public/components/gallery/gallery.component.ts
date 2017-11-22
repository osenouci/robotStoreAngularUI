import { Component, OnInit, ViewEncapsulation, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements AfterViewChecked {

  protected slideIndex:number = 1;

  @Input() photos:Array<string> = new Array();

  constructor() { console.log(this.photos); }

  ngAfterViewChecked() {
      this.showSlides(1);
  }

  public currentSlide(i:number){
    this.showSlides(this.slideIndex = i);
  }
  public changeSlide(dir:number) {
    this.slideIndex += dir;
    this.showSlides(this.slideIndex);
  }

  protected showSlides(n) {

    let slides = document.getElementsByClassName("mySlides");
    if(!slides || slides.length == 0) {
      console.log("View not loaded yet!! do nothing");
      return;
    }
console.log("Show: " + n);
    let i;
    let dots   = document.getElementsByClassName("dot");

    if (n > slides.length) {this.slideIndex = 1} 
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        (slides[i] as any).style.display = "none"; 
    }

    console.log("Going to show: " + this.slideIndex);

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    (slides[this.slideIndex-1] as any).style.display = "block"; 
    dots[this.slideIndex-1].className += " active";
  }






















}
