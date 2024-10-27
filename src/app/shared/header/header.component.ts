import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineComponent } from './headline/headline.component';
import { SliderComponent } from './slider/slider.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translationService';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    CommonModule,
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
  openBurgerMenu: boolean = false;

  @ViewChild('popupBurgerMenu') popupBurgerMenu!: ElementRef;

  constructor(
    private translate: TranslateService,
    private translationService: TranslationService,
    private eRef: ElementRef
  ) {

    const storedLang = localStorage.getItem('lang') || 'de';
    this.isEnglish = storedLang === 'de';

    this.translate.setDefaultLang('de');
    this.translate.use(storedLang);
  }

  /**
   * Toggles the language between German and English.
   * This method updates the `isEnglish` state, changes the current
   * language used in the application, and stores the selected 
   * language in local storage for persistence. It also calls the 
   * `initializeLanguage` method on the `TranslationService` to 
   * apply the necessary translations.
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

  /**
   * Handles click events on the document. If the user clicks outside
   * of the `popupBurgerMenu` and the burger menu is open, this method
   * sets `openBurgerMenu` to false, effectively closing the menu.
   * @param event The click event from the document.
   */
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    // Prüfen, ob der Klick außerhalb des Containers `popupBurgerMenu` war
    if (this.openBurgerMenu && this.popupBurgerMenu && !this.popupBurgerMenu.nativeElement.contains(event.target)) {
      this.openBurgerMenu = false;
    }
  }

  /**
   * Toggles the visibility of the burger menu. If the menu is open, 
   * it closes it; if it is closed, it opens the menu. This method 
   * updates the `openBurgerMenu` state accordingly.
   */
  openPopupBurgerMenu() {
    if(this.openBurgerMenu) {
      this.openBurgerMenu = false;
    } else {
      this.openBurgerMenu = true;
    }
  }
}
