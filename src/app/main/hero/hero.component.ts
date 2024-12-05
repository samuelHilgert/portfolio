import { Component } from '@angular/core';
import { HeadlineComponent } from './headline/headline.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { SliderComponent } from './slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    HeadlineComponent,
    SliderComponent,
    SocialLinksComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})

export class HeroComponent {}
