import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getLanguage() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      return lang;
    } else {
      localStorage.setItem('lang', 'de');
      return 'de'
    }
  }

  initializeLanguage() {
    const lang = this.getLanguage();
    // console.log('Eingestellte Sprache: ', lang);
    this.translate.use(lang);
  }
}
