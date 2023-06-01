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
  faClose,
  faFaceAngry,
  faExclamationTriangle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/services/forms/shared.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/users/users.service';

@Component({
  selector: 'reset-password',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
    // SET isActive STATE TO false
    isActive: boolean = false;

    resetForm!: FormGroup;

    // FONT AWESOME ICONS
    homeIcon: IconDefinition = faHome;
    plusIcon: IconDefinition = faPlusCircle;
    cartIcon: IconDefinition = faCartShopping;
    upIcon: IconDefinition = faArrowCircleUp;
    lockIcon: IconDefinition = faLock;
    closeIcon: IconDefinition = faClose;
    warningIcon: IconDefinition = faExclamationTriangle;
    angryEmoji: IconDefinition = faFaceAngry;
  
    // DEFAULT FORM INPUT VALUES
    defaultParams = {
      email: 'Email address...',
      password: 'Enter new password'
    };
  
    // INJECT SHARED SERVICE
    constructor(private sharedService: SharedService, private formBuilder: FormBuilder, private userService: UserService) { }

    ngOnInit(): void {
      // CREATE FORM
      this.resetForm = this.formBuilder.group({
        email: ['', [Validators.required, this.userService.EMAIL_PATTERN_VALIDATOR()]],
        userPassword: ['', [Validators.required, this.userService.PASSWORD_PATTERN_VALIDATOR()]]
      });

      this.sharedService.resetPasswordForm$.subscribe(active => {
        this.isActive = active;
      });
    }
    
    setResetPasswordActive():void {
      this.sharedService.openResetPasswordForm();
    }

    ngAfterViewInit() {
      
    }
  
    closeResetPasswordForm() {
      this.sharedService.closeResetForm();
    }
  
    // 
    resetPassword() {
      console.log("Clicked!");
      this.userService.resetUserPassword(this.resetForm.value);
    }

}
