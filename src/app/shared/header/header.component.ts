import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Angular Material Modul importieren
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineComponent } from './headline/headline.component';
import { SliderComponent } from './slider/slider.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core'; // Importiere den TranslateService
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translationService';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    NavbarComponent,
    HeadlineComponent,
    SliderComponent,
    SocialLinksComponent,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  isEnglish: boolean = true;

  constructor(private translate: TranslateService, private translationService: TranslationService) {
    // this.translate.setDefaultLang('de');
  }

  /**
   * This function translate the language between german and english
   *
   */
  toggleLanguage() {
    this.isEnglish = this.isEnglish;
    if (!this.isEnglish) {
      this.translate.use('en');
      // console.log('english');
      localStorage.setItem('lang', 'en');
    } else {
      this.translate.use('de');
      // console.log('german');
      localStorage.setItem('lang', 'de');
    }
    this.translationService.initializeLanguage();
  }
}
