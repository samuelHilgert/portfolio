import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {path:'privacy-policy', component: PrivacyPolicyComponent},
    {path:'legal-notice', component: LegalNoticeComponent},
];

