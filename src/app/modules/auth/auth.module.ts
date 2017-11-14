import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';

import { LoginComponent  } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { AuthModuleRoutes } from './auth.routes';


// Import UI modules
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModuleRoutes,
    SharedModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class AuthModule { }
