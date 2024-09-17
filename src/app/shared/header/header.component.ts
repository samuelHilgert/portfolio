import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  // Angular Material Modul importieren
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineComponent } from './headline/headline.component';
import { SliderComponent } from "./slider/slider.component";
import { SocialLinksComponent } from "./social-links/social-links.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, NavbarComponent, HeadlineComponent, SliderComponent, SocialLinksComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
