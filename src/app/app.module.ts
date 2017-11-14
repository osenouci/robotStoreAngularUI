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

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
