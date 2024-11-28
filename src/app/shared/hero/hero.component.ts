import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeadlineComponent } from './headline/headline.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, HeadlineComponent, SliderComponent, SocialLinksComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
