import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RoutingService } from '../shared/services/routingService';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private routingService: RoutingService
  ) {}

    /**
   * Lifecycle hook that is called after the component has been initialized.
   * This method calls the `deactivatePrivacyPage()` function from the RoutingService.
   * The purpose of this function is to deactivate the privacy-related UI elements 
   * and update the application state when the user navigates to the privacy policy page.
   */
  ngOnInit(): void {
    this.routingService.deactivatePrivacyPage();
  }
}