import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent       } from './components/home-page/home-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddComponent } from './components/add/add.component';
import { AuthGuard } from './../../guards/auth.guard';

const routes: Routes = [
  { path: 'home'            , component: HomePageComponent         },
  { path: 'add'            , component: AddComponent, canActivate: [AuthGuard]},
  { path: 'details/:robotId', component: ProductDetailsComponent   },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicModuleRoutes { }