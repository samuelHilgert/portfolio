import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RoutingService } from '../shared/services/routingService';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent implements OnInit {
  constructor(private routingService: RoutingService) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * This method calls the `deactivatePrivacyPage()` function from the RoutingService.
   * The purpose of this function is to deactivate the privacy-related UI elements
   * and adjust the application state when the user navigates to the legal notice page.
   */
  ngOnInit(): void {
    this.routingService.deactivatePrivacyPage();
  }
}
