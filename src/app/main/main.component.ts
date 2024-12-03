import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from '../contact/contact.component';
import { TranslationService } from '../shared/services/translationService';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    FeedbackComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * This method sets the overflow settings for the translation service to
   * 'default'. This is typically used to manage the display and behavior
   * of the application's overflow settings when the main component is
   * rendered. This ensures that any necessary configurations for
   * translations are applied at the start.
   */
  ngOnInit(): void {
    this.translationService.setOverflowSettings('default');
  }
}
