// THIS IS THE ROOT COMPONENT OF THE APP
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// IMPORT FONTAWESOME ICONS
import { faHome, faPlusCircle, faCartShopping, faArrowCircleUp, faLock, faClose } from '@fortawesome/free-solid-svg-icons';

// IMPORT ANGULAR FORMS
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

// This service handles the displaying of pop up forms
import { SharedService } from '../../../services/forms/shared.service';
import { USER_MODEL } from 'src/abstract_classes/user.model';
import { UserService } from 'src/services/users/users.service';

// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'signup', // CUSTOM HTML SELECTOR
  templateUrl: 'signup.component.html', // LINK TO HTML
  styleUrls: ['signup.component.css'], // LINK TO CSS
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule]
})
export class SignUpComponent {
  // SET isActive STATE TO false
  isActive: boolean = false;

  signUpForm!: FormGroup;

  // INJECT SHARED SERVICE & FORM CLASSES
  constructor(private sharedService: SharedService, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // CREATE FORM
    this.signUpForm = this.formBuilder.group({
      email: ["", Validators.required],
      userPassword: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      streetAddress: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
      phone: ["", Validators.required]
    });

    this.sharedService.signUpForm$.subscribe(active => {
      this.isActive = active;
    });
  }

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
    userPassword: 'Password...',
    firstName: 'First name...',
    lastName: 'Last name...',
    streetAddress: 'Street address',
    city: 'City',
    country: 'Country',
    phone: 'Phone number...'
  };

  // METHOD FOR CLOSING SignUpForm
  closeSignUpForm() {
    this.sharedService.closeSignUpForm();
  }

  signUp() {
    if (this.signUpForm.valid) {
      const newUser: USER_MODEL = this.signUpForm.value;
      
      this.userService.createUser(newUser).subscribe((response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      });
    }
  }
}
