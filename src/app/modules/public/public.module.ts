// Import core modules
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { HomePageComponent        } from './components/home-page/home-page.component';
import { ProductDetailsComponent  } from './components/product-details/product-details.component';

// Import UI modules
import { SharedModule } from './../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; // pagination module

// Import the routes 
import { PublicModuleRoutes } from './public.routes';
import { CategoryComponent } from './components/category/category.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule,
    PublicModuleRoutes,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [HomePageComponent, ProductDetailsComponent, CategoryComponent, ShowcaseComponent, GalleryComponent]
})
export class PublicModule { }
