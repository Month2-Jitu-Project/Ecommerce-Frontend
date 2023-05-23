// THIS IS THE ROOT COMPONENT OF THE APP
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
// IMPORT FONTAWESOME ICONS
import {
  faHome,
  faPlusCircle,
  faCartShopping,
  faArrowCircleUp,
  faLock,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { authenticationService } from 'src/services/authentication.service';
// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'app-root', // CUSTOM HTML SELECTOR
  templateUrl: './app.component.html', // LINK TO HTML
  styleUrls: ['./app.component.css'], // LINK TO CSS
})
export class AppComponent implements AfterViewInit {
  constructor(private authenticationService: authenticationService) {}

  triggerButtonClick(): void {
    this.authenticationService.emitButtonClick();
  }

  // SELECT ADD PRODUCT FORM : Note @ViewChild can only select one Element
  @ViewChild('addProductForm', { static: false })
  elementRef!: ElementRef;

  // LOGO IMAGE URL
  logoImageURL = './assets/images/png/logo_color.png';
  logoImageURLalt = './assets/images/png/logo_color_cart.png';

  // FONT AWESOME ICONS
  homeIcon = faHome;
  plusIcon = faPlusCircle;
  cartIcon = faCartShopping;
  upIcon = faArrowCircleUp;
  lockIcon = faLock;
  closeIcon = faClose;

  // DEFAULT FORM INPUT VALUES
  defaultParams = {
    productName: 'Enter product name...',
    productImage: 'Enter image URL...',
    productPrice: 1000,
    productDescription: 'Type product description here...',
  };

  ngAfterViewInit() {}

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
    addProductForm.classList.toggle('active');
  }

  ///////////////////////////////
  // METHOD FOR ADDING PRODUCT //
  ///////////////////////////////
  addProduct() {
    console.log(this);
  }
}
