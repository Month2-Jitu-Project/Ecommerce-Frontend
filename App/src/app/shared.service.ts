import { Injectable } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
// THE @Injectable DECORATOR INDICATES 
// THAT THE EXPORTED CLASS IS A SERVICE
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // DEFINE A PROPERTY TO HOLD THE ACTIVE STATE
  private signInFormSubject = new Subject<boolean>();
  signInForm$ = this.signInFormSubject.asObservable();

  private signUpFormSubject = new Subject<boolean>();
  signUpForm$ = this.signUpFormSubject.asObservable();


  //////////////////////////////
  /// METHODS TO OPEN FORMS ////
  //////////////////////////////
  openSignInForm(): void {
    this.signInFormSubject.next(true);
    this.signUpFormSubject.next(false);
  }

  openSignUpForm(): void {
    this.signInFormSubject.next(false);
    this.signUpFormSubject.next(true);
  }

   //////////////////////////////
  /// METHODS TO CLOSE FORMS ///
  //////////////////////////////
  closeSignInForm(): void {
    this.signInFormSubject.next(false);
    this.signUpFormSubject.next(false);
  }

  closeSignUpForm(): void {
    this.signInFormSubject.next(false);
    this.signUpFormSubject.next(false);
  }
  
}
