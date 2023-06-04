// THIS IS THE ROOT COMPONENT OF THE APP
import { Component, AfterViewInit } from '@angular/core';

// IMPORT FONTAWESOME ICONS
import { faHome, faPlusCircle, faCartShopping, faArrowCircleUp, faLock, faClose, faBagShopping, faEllipsis, IconDefinition, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// SERVICES
import { SharedService } from '../services/forms/shared.service';

import { UserService } from 'src/services/users/users.service';
import { MessageBoxService } from 'src/services/message-box/message-box.service';

// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'app-root', // CUSTOM HTML SELECTOR
  templateUrl: './app.component.html', // LINK TO HTML
  styleUrls: ['./app.component.css'] // LINK TO CSS
})
export class AppComponent implements AfterViewInit {
  // LOGO IMAGE URLs
  logoImageURL = './assets/images/png/logo_color.png';
  logoImageURLalt = './assets/images/png/logo_color_cart.png';

  // FONT AWESOME ICONS
  homeIcon: IconDefinition = faHome;
  plusIcon: IconDefinition = faPlusCircle;
  cartIcon: IconDefinition = faCartShopping;
  bagIcon: IconDefinition = faBagShopping;
  upIcon: IconDefinition = faArrowCircleUp;
  lockIcon: IconDefinition = faLock;
  closeIcon: IconDefinition = faClose;
  ellipsisIcon: IconDefinition = faEllipsis;
  warningIcon: IconDefinition = faExclamationTriangle;

  // INJECT SERVICES & FORM CLASSES
  constructor(private sharedService: SharedService, private userService: UserService, private messageBoxService: MessageBoxService) { }

  // LOGIN STATUS
  isSignedIn: boolean = false;

  ngOnInit() {
    // CHECK LOCAL STORAGE FOR AUTH TOKEN
    this.isSignedIn = (localStorage.getItem('token') !== null);
  }

  //////////////////////////////////////////
  //    METHODS TO UPDATE ACTIVE STATE    //
  //////////////////////////////////////////
  setAddProductFormActive(): void {
    this.sharedService.openAddProductForm();
  }

  setCategoriesActive(): void {
    this.sharedService.openCategoriesForm();
  }

  setSignUpActive(): void {
    this.sharedService.openSignUpForm();
  }

  setCartActive(): void {
    this.sharedService.openCart();
  }

  // METHOD TO HANDLE FORM POP UPS
  setSignInActive(): void {
    // IF isSignedIn IS EQUAL TO true
    // EXECUTE Sign Out LOGIC
    if (this.isSignedIn) {
      // DISPLAY MESSAGE ON Sign Out 
      this.messageBoxService.showSuccessMessage('Signing Out...');

      // CLEAR LOCAL STORAGE IN 2s
      setTimeout(() => {
        localStorage.clear();

        // SET isSignedIn STATE TO false WHEN Sign Out BUTTON IS CLICKED
        this.isSignedIn = false;
      }, 2000);

      // ELSE ONLY OPEN THE SignIn FORM IF THE ABOVE CONDITIONS AREN'T MET
    } else {
      this.sharedService.openSignInForm();
    }
  }

  ngAfterViewInit() { }

  ///////////////////////////////////////////
  /// METHOD TO REDIRECT USER TO HOMEPAGE ///
  ///////////////////////////////////////////
  redirectToHomePage() {
    this.messageBoxService.showSuccessMessage('Let\'s see how long it takes for me to disappear');
  }

  WelcomeMessage() {
    this.messageBoxService.showSuccessMessage('Welcome!');
  }

  // METHOD FOR CHECKING IF USER IS AUTHENTICATED
  Authenticated() {
    return this.userService.isAuthenticated();
  }
}
