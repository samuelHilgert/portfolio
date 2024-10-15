import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/services/translationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.translationService.setOverflowSettings('popup');
  }


  close() {
    this.translationService.setOverflowSettings('default');
    this.router.navigate(['/']);
  }

  closePopupOnClickOutside(event: MouseEvent) {
    this.close();
  }
}
