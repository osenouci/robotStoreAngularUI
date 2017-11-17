// Import core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import UI modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { SharedModule } from './modules/shared/shared.module';

// Import the routes
import { AppRoutingModule } from './app.module.routes';

// Import components
import { AppComponent          } from './components/app.component/app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';


import { RequestService } from './services/request.service';
import { AuthInterceptor } from './modules/auth/classes/auth.interceptor';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    RequestService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
