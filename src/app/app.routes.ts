import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  { 
    path: 'privacy-policy',
    component: PrivacyPolicyComponent, 
  },
  { 
    path: 'legal-notice',
    component: LegalNoticeComponent,
  }
];
