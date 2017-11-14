// Import core modules
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { HomePageComponent        } from './components/home-page/home-page.component';
import { ProductDetailsComponent  } from './components/product-details/product-details.component';

// Import UI modules
import { SharedModule } from './../shared/shared.module';

// Import the routes
import { PublicModuleRoutes } from './public.routes';
import { CategoryComponent } from './components/home-page/subcomponents/category/category.component';
import { ListComponent } from './components/home-page/subcomponents/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    PublicModuleRoutes,
    SharedModule
  ],
  declarations: [HomePageComponent, ProductDetailsComponent, CategoryComponent, ListComponent]
})
export class PublicModule { }
