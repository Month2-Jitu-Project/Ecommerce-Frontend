import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// IMPORT FONTAWESOME ICONS
import {
  faHome,
  faPlusCircle,
  faCartShopping,
  faArrowCircleUp,
  faLock,
  faClose
} from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/services/forms/shared.service';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
    // SET isActive STATE TO false
    isActive: boolean = false;
    // INJECT SHARED SERVICE
    constructor(private sharedService: SharedService) { }


    ngOnInit(): void {
      this.sharedService.resetPasswordForm$.subscribe(active => {
        this.isActive = active;
      });
    }
    

    // setResetPasswordActive():void {
    //   this.sharedService.openResetPasswordForm();
    // }

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
      phoneNumber: 'Phone number...',
    };
  
    ngAfterViewInit() {
      console.log('Form initialized!');
    }
  
    closeResetPasswordForm() {
      this.sharedService.closeResetPasswordForm();
    }
  
    resetPassword() {
      console.log(this);
    }

}
