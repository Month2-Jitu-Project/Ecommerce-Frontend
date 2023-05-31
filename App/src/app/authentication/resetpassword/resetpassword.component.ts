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
  faFaceSurprise,
  faFaceAngry,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/services/forms/shared.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    // INJECT SHARED SERVICE
    constructor(private sharedService: SharedService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      // CREATE FORM
      this.resetForm = this.formBuilder.group({
        email: ['', Validators.required],
        userPassword: ['', Validators.required]
      })

      this.sharedService.resetPasswordForm$.subscribe(active => {
        this.isActive = active;
      });
    }
    
    setResetPasswordActive():void {
      this.sharedService.openResetPasswordForm();
    }

    // FONT AWESOME ICONS
    homeIcon: IconDefinition = faHome;
    plusIcon: IconDefinition = faPlusCircle;
    cartIcon: IconDefinition = faCartShopping;
    upIcon: IconDefinition = faArrowCircleUp;
    lockIcon: IconDefinition = faLock;
    closeIcon: IconDefinition = faClose;
    angryEmoji: IconDefinition = faFaceAngry;
  
    // DEFAULT FORM INPUT VALUES
    defaultParams = {
      email: 'Email address...',
      password: 'Enter new password'
    };
  
    ngAfterViewInit() {
      
    }
  
    closeResetPasswordForm() {
      this.sharedService.closeResetForm();
    }
  
    resetPassword() {
      
    }

}
