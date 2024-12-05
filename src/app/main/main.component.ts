import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from '../contact/contact.component';
import { TranslationService } from '../shared/services/translationService';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    FeedbackComponent,
    ContactComponent,
    RouterOutlet,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  /**
   * Lifecycle hook called after the component has been initialized.
   * This method is used to set the default overflow settings for the translation service.
   * It ensures that the application is ready for rendering with the correct translation settings.
   */
  ngOnInit(): void {
    this.translationService.setOverflowSettings('default');
  }
}
