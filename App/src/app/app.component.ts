// THIS IS THE ROOT COMPONENT OF THE APP
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// IMPORT FONTAWESOME ICONS
import { faHome, faPlusCircle, faCartShopping, faArrowCircleUp, faLock, faClose, faBagShopping, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../services/forms/shared.service';
// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'app-root', // CUSTOM HTML SELECTOR
  templateUrl: './app.component.html', // LINK TO HTML
  styleUrls: ['./app.component.css'], // LINK TO CSS
})
export class AppComponent implements AfterViewInit {
  // SELECT ADD PRODUCT FORM : Note @ViewChild can only select one Element
  @ViewChild('addProductForm', { static: false })
  elementRef!: ElementRef;
  
  // INJECT SHARED SERVICE
  constructor(private sharedService: SharedService) {}

  /////////////////////////////////////
  /// METHOD TO UPDATE ACTIVE STATE ///
  /////////////////////////////////////
  setSignUpActive(): void {
    this.sharedService.openSignUpForm();
  }

  setSignInActive(): void {
    this.sharedService.openSignInForm();
  }

  // LOGO IMAGE URL
  logoImageURL = './assets/images/png/logo_color.png';
  logoImageURLalt = './assets/images/png/logo_color_cart.png';

  // FONT AWESOME ICONS
  homeIcon = faHome;
  plusIcon = faPlusCircle;
  cartIcon = faCartShopping;
  bagIcon = faBagShopping;
  upIcon = faArrowCircleUp;
  lockIcon = faLock;
  closeIcon = faClose;
  ellipsisIcon = faEllipsis;

  // DEFAULT FORM INPUT VALUES
  defaultParams = {
    productName: 'Enter product name...',
    productImage: 'Enter image URL...',
    productPrice: 1000,
    productDescription: 'Product description...',
  };

  ngAfterViewInit() { }

  // METHOD FOR CLOSING ALL FORMS
  closeForm() {
    const addProductForm = this.elementRef.nativeElement;
    addProductForm.classList.remove('active');
  }

  ///////////////////////////////////////////
  /// METHOD TO REDIRECT USER TO HOMEPAGE ///
  ///////////////////////////////////////////
  redirectToHomePage() {
    // console.log(this.homeIcon);
  }

  /////////////////////////////////////////
  //// METHOD FOR TOGGLING POP UP MENU ////
  /////////////////////////////////////////
  togglePopUp() {
    console.log('Form toggled...');
    // SELECT ADD PRODUCT FORM
    const addProductForm = this.elementRef.nativeElement;
    addProductForm.classList.add('active');
  }

  ///////////////////////////////
  // METHOD FOR ADDING PRODUCT //
  ///////////////////////////////
  addProduct() {
    console.log(this);
  }
}
