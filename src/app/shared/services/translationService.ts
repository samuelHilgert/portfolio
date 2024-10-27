import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})

export class TranslationService {
  constructor(private translate: TranslateService) {}

  /**
   * Sets the application's language and stores the selected language
   * in local storage for persistence. It updates the translation 
   * service to use the specified language.
   * 
   * @param lang The language code to set (e.g., 'de' for German, 'en' for English).
   */
  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  /**
   * Retrieves the current language from local storage.
   * If no language is found, it sets the default language to German ('de') 
   * and returns it.
   * 
   * @returns The current language code (e.g., 'de' or 'en').
   */
  getLanguage() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      return lang;
    } else {
      localStorage.setItem('lang', 'de');
      return 'de';
    }
  }

  /**
   * Initializes the language setting for the application.
   * This method retrieves the current language using `getLanguage` 
   * and applies it to the translation service.
   */
  initializeLanguage() {
    const lang = this.getLanguage();
    this.translate.use(lang);
  }

  /**
   * Adjusts the overflow settings of the document body based on the type specified.
   * If the type is 'default', it resets the overflow and position styles.
   * If the type is 'popup', it sets the overflow to hidden and the position to fixed, 
   * preventing scrolling when a popup is displayed.
   * 
   * @param type The type of overflow setting ('default' or 'popup').
   */
  setOverflowSettings(type: string) {
    if (type == 'default') {
      document.body.style.overflow = '';
      document.body.style.position = '';
    } else if (type == 'popup') {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    }
  }
}
