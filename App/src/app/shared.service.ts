import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// THE @Injectable DECORATOR INDICATES 
// THAT THE EXPORTED CLASS IS A SERVICE
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // DEFINE A PROPERTY TO HOLD THE ACTIVE STATE
  private isActiveSubject = new Subject<boolean>();
  isActive$ = this.isActiveSubject.asObservable();

  //////////////////////////////////
  /// METHOD TO SET ACTIVE STATE ///
  //////////////////////////////////
  setActive(active: boolean): void {
    this.isActiveSubject.next(active);
  }

  //////////////////////////////////
  /// METHOD TO GET ACTIVE STATE ///
  //////////////////////////////////
}
