// THIS FILE CONTAINS THE CORE
// CONFIGURATION FOR THE APP
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductComponent } from '../product/product.component';
import { SignUpComponent } from '../signup/signup.component';

// THE NgModule DECORATOR INDICATES THAT
//THIS FILE IS A MODULE
// THIS DECORATOR CONTAINS METADATA WHICH
// DENOTES ALL RELEVANT AND NECESSARY 
// DEPENDENCIES
@NgModule({
  // MARK OUT WHICH COMPONENTS AND 
  // DIRECTIVES CAN BE USED WITHIN THE
  // APP
  declarations: [
    AppComponent,
    ProductComponent,
    SignUpComponent
  ],
  // ADDS OTHER MODULES THAT PROVIDE 
  // FUNCTIONALITY NEEDED BY THE APP
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  // THE ENTRY POINT COMPONENT FOR
  // STARTING THE APP
  bootstrap: [AppComponent]
})
export class AppModule { }
