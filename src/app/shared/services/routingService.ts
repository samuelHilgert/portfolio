// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class RoutingService {
//   private activatePrivacySubject = new BehaviorSubject<boolean>(true);
//   activatePrivacy$ = this.activatePrivacySubject.asObservable();

//   constructor() {}

//   /**
//    * Activates the privacy page by setting the state to `true`.
//    * This method updates the BehaviorSubject and notifies all subscribed components
//    * that the privacy page should be activated.
//    */
//   activatePrivacyPage(): void {
//     this.activatePrivacySubject.next(true);
//   }

//   /**
//    * Deactivates the privacy page by setting the state to `false`.
//    * This method updates the BehaviorSubject and notifies all subscribed components
//    * that the privacy page should be deactivated.
//    */
//   deactivatePrivacyPage(): void {
//     this.activatePrivacySubject.next(false);
//   }
// }
