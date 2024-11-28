import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { TranslationService } from '../shared/services/translationService';
import { HeaderComponent } from '../shared/hero/header/header.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})

export class LegalNoticeComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private router: Router 
  ) {}

  /**
   * Lifecycle hook called upon component initialization
   * Sets overflow behavior for popup display
   */
  ngOnInit(): void {
    this.translationService.setOverflowSettings('popup');
  }

  /**
   * Closes the legal notice and resets scroll behavior
   */
  closeLegalNotice() {
    this.translationService.setOverflowSettings('default');
    this.router.navigate(['/']);
  }

  /**
   * Closes the popup when clicking outside of it
   * @param event Mouse event for detecting outside clicks
   */
  closePopupOnClickOutside(event: MouseEvent) {
    this.closeLegalNotice();
  }
}
