import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { PageNotFoundComponent  } from './components/page-not-found/page-not-found.component';

// Import Guards
//import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [

  {
    path: '',
    loadChildren: './modules/public/public.module#PublicModule',
    data: { preload: true }
  }, 
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
    data: { preload: true }
  },   
  /*    
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: './modules/profile/profile.module#ProfileModule',
    data: { preload: true }
  },*/       
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
   // AuthGuard,
  ]
})
export class AppRoutingModule { }
