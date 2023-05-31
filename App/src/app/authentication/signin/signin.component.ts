// THIS IS THE ROOT COMPONENT OF THE APP
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// IMPORT FONTAWESOME ICONS
import { faHome, faPlusCircle, faCartShopping, faArrowCircleUp, faLock, faClose, IconDefinition, faFaceSurprise } from '@fortawesome/free-solid-svg-icons';
// This service handles the displaying of pop up forms
import { SharedService } from '../../../services/forms/shared.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/services/users/users.service';
import { LOGIN_MODEL } from 'src/abstract_classes/login.model';
import { RESPONSE_MODEL } from 'src/abstract_classes/response.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'signin', // CUSTOM HTML SELECTOR
  templateUrl: './signin.component.html', // LINK TO HTML
  styleUrls: ['./signin.component.css'], // LINK TO CSS
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule]
})
export class SignInComponent {
  // SET isActive STATE TO false
  isActive: boolean = false;

  // INITIALIZE SIGN in FORM
  signInForm!: FormGroup;

  // FONT AWESOME ICONS
  homeIcon: IconDefinition = faHome;
  plusIcon: IconDefinition = faPlusCircle;
  cartIcon: IconDefinition = faCartShopping;
  upIcon: IconDefinition = faArrowCircleUp;
  lockIcon: IconDefinition = faLock;
  closeIcon: IconDefinition = faClose;
  surprisedEmoji: IconDefinition = faFaceSurprise;

  // DEFAULT FORM INPUT VALUES
  defaultParams = {
    email: 'Email address...',
    password: 'Password...',
  };

  // INJECT SERVICES & MODULAR SERVICES
  constructor(private sharedService: SharedService, private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ["", Validators.required],
      userPassword: ["", Validators.required]
    })

    this.sharedService.signInForm$.subscribe(active => {
      this.isActive = active;
    });
  }

  //PROPERTY TO HOLD ACTIVE STATE
  setResetPasswordActive(): void {
    this.sharedService.openResetPasswordForm();
  }

  ngAfterViewInit() {

  }

  closeSignInForm() {
    this.sharedService.closeSignInForm();
  }

  ///////////////////////////////////
  /// METHOD FOR SIGNING IN USERS ///
  ///////////////////////////////////
  signIn() {
    if (this.signInForm.valid) {
      const user: LOGIN_MODEL = this.signInForm.value;

      this.userService.loginUser(user).subscribe((signInResponse: RESPONSE_MODEL) => {

        // RETRIEVE RESPONSE FROM REQUEST
        const response = signInResponse.response;
        // RETRIEVE TOKEN FROM REQUEST
        const token = signInResponse.token;

        // DISPLAY SUCCESS STATE TO THE UI

        // SAVE TOKEN TO LOCAL STORAGE
        localStorage.setItem('token', token);

        // RELOAD PAGE ON SIGN IN
        this.router.navigate([this.route.snapshot.url]);

      },
        (error: any) => {
          console.error(error);
        });
    }
  }
}
