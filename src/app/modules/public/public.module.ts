import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomePageComponent, ProductDetailsComponent]
})
export class PublicModule { }
