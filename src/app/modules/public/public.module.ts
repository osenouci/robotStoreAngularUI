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
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { AddComponent } from './components/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    PublicModuleRoutes,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [HomePageComponent, ProductDetailsComponent, CategoryComponent, ShowcaseComponent, GalleryComponent, CategoryFilterPipe, AddComponent]
})
export class PublicModule { }
