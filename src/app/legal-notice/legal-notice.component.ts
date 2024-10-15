import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { TranslationService } from '../shared/services/translationService';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})

export class LegalNoticeComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.translationService.setOverflowSettings('popup');
  }

  closeLegalNotice() {
    this.translationService.setOverflowSettings('default');
    this.router.navigate(['/']);
  }

  closePopupOnClickOutside(event: MouseEvent) {
    this.closeLegalNotice();
  }
}
