// THIS IS THE ROOT COMPONENT OF THE APP
import {
  Component,
  ViewChild,
  ElementRef
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
import { SharedService } from 'src/app/shared.service';

// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'signup', // CUSTOM HTML SELECTOR
  templateUrl: './signup.component.html', // LINK TO HTML
  styleUrls: ['./signup.component.css'], // LINK TO CSS
})
export class SignUpComponent {
  @ViewChild('SignUpForm', { static: false })
  elementRef!: ElementRef;
  // SET isActive STATE TO false
  isActive: boolean = false;
  // INJECT SHARED SERVICE
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.isActive$.subscribe(active => {
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
    firstName: 'First name...',
    lastName: 'Last name...',
    phoneNumber: 'Phone number...',
  };

  ngAfterViewInit() {
    console.log('Form initialized!');
  }

  closeSignUpForm() {
    this.sharedService.setActive(false);
  }

  signUp() {
    console.log(this);
  }
}
