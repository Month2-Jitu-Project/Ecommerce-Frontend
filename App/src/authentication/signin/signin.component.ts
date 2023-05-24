// THIS IS THE ROOT COMPONENT OF THE APP
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// IMPORT FONTAWESOME ICONS
import {
  faHome,
  faPlusCircle,
  faCartShopping,
  faArrowCircleUp,
  faLock,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared.service';

// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'signin', // CUSTOM HTML SELECTOR
  templateUrl: './signin.component.html', // LINK TO HTML
  styleUrls: ['./signin.component.css'], // LINK TO CSS
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class SignInComponent {
  // SET isActive STATE TO false
  isActive: boolean = false;
  // INJECT SHARED SERVICE
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.signInForm$.subscribe(active => {
      this.isActive = active;
    });
  }
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
    email: 'Email address...',
    password: 'Password...',
  };

  ngAfterViewInit() {
    console.log('Form initialized!');
  }

  closeSignInForm() {
    this.sharedService.closeSignInForm();
  }

  ///////////////////////////////////
  /// METHOD FOR SIGNING IN USERS ///
  ///////////////////////////////////
  signIn() {
    console.log(this);
  }
}
