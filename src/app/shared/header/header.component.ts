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

      // Lade die Sprache aus dem localStorage und setze isEnglish
    const storedLang = localStorage.getItem('lang') || 'de'; // Fallback auf 'de' wenn kein Wert vorhanden ist
      this.isEnglish = storedLang === 'de'; // Setze isEnglish basierend auf dem Wert in localStorage

    // // Setze die Sprache für die Übersetzungen
    this.translate.setDefaultLang('de'); // Optional: Setze die Standardsprache
    this.translate.use(storedLang); // Setze die aktuelle Sprache
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
