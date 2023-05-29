/////////////////////////
//////// IMPORTS ////////
/////////////////////////
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// THE @Injectable DECORATOR INDICATES 
// THAT THE EXPORTED CLASS IS A SERVICE
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // DEFINE PROPERTIES TO HOLD THE ACTIVE STATE
  private signInFormSubject = new Subject<boolean>();
  signInForm$ = this.signInFormSubject.asObservable();

  private signUpFormSubject = new Subject<boolean>();
  signUpForm$ = this.signUpFormSubject.asObservable();

  private categoriesFormSubject = new Subject<boolean>();
  categoriesForm$ = this.categoriesFormSubject.asObservable();

  private resetPasswordFormSubject = new Subject<boolean>();
  resetPasswordForm$ = this.resetPasswordFormSubject.asObservable();

  //////////////////////////////
  /// METHODS TO OPEN FORMS ////
  //////////////////////////////
  openSignInForm(): void {
    this.signInFormSubject.next(true);
    this.signUpFormSubject.next(false);
    this.resetPasswordFormSubject.next(false);
    this.categoriesFormSubject.next(false);
  }

  openSignUpForm(): void {
    this.signInFormSubject.next(false);
    this.signUpFormSubject.next(true);
    this.resetPasswordFormSubject.next(false);
    this.categoriesFormSubject.next(false);
  }

  openCategoriesForm(): void {
    this.signInFormSubject.next(false);
    this.signUpFormSubject.next(false);
    this.categoriesFormSubject.next(true);
  }

  openResetPasswordForm(): void {
    this.resetPasswordFormSubject.next(true);
    this.signInFormSubject.next(false);
    this.signUpFormSubject.next(false);
    this.categoriesFormSubject.next(false);
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

  closeCategoriesForm(): void {
    this.categoriesFormSubject.next(false);
  }

  closeResetForm(): void {
    this.resetPasswordFormSubject.next(false);
  }
}
