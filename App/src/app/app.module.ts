// THIS FILE CONTAINS THE CORE
// CONFIGURATION FOR THE APP
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// MAIN APP COMPONENTS
import { AppComponent } from './app.component';
import { DisplayProductComponent } from './products/display_product/displayProduct.component';

// ADDITIONAL MODULES
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from 'src/app/categories/categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './authentication/signin/signin.component';
import { SignUpComponent } from './authentication/signup/signup.component';


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
        AppComponent
    ],
    providers: [],
    // THE ENTRY POINT COMPONENT FOR
    // STARTING THE APP
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        DisplayProductComponent,
        SignInComponent,
        SignUpComponent,
        CategoriesComponent,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
