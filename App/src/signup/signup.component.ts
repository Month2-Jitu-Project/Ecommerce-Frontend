// THIS IS THE ROOT COMPONENT OF THE APP
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnInit,
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
  selector: 'signup', // CUSTOM HTML SELECTOR
  templateUrl: './signup.component.html', // LINK TO HTML
  styleUrls: ['./signup.component.css'], // LINK TO CSS
})
export class SignUpComponent implements OnInit {
  // SELECT ADD SIGN UP FORM : Note @ViewChild can only select one Element
  @ViewChild('signUpForm', { static: false })
  elementRef!: ElementRef;

  constructor(private authenticationService: authenticationService) {}

  ngOnInit() : void {
    this.authenticationService.buttonClicked.subscribe(()=>{
      this.elementRef.nativeElement.click();
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
    email: 'Enter your email...',
    password: 'Enter your password...',
    firstName: 'Enter your first name',
    lastName: 'Enter your last name...',
    phoneNumber: 'Enter your phone number...',
  };

  ngAfterViewInit() {
    console.log('Form initialized!');
  }

  closeForm() {
    const signUpForm = this.elementRef.nativeElement;
    signUpForm.classList.remove('active');
  }

  toggleSignUpForm() {
    console.log('Form toggled...');
    // SELECT SIGN UP FORM
    const signUpForm = this.elementRef.nativeElement;
    console.log(signUpForm);
    signUpForm.classList.toggle('active');
    alert('sign up form clicked');
  }

  signUp() {
    console.log(this);
  }
}
