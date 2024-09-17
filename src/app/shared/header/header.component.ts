import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  // Angular Material Modul importieren
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineComponent } from './headline/headline.component';
import { SliderComponent } from "./slider/slider.component";
import { SocialLinksComponent } from "./social-links/social-links.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, NavbarComponent, HeadlineComponent, SliderComponent, SocialLinksComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isEnglish:boolean = false;  // Standardmäßig auf Englisch (EN)

  toggleLanguage() {
    this.isEnglish = this.isEnglish;
    if (!this.isEnglish) {
      console.log('Sprache auf Englisch umgestellt');
    } else {
      console.log('Sprache auf Deutsch umgestellt');
    }
  }
}

