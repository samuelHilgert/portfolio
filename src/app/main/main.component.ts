import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeedbackComponent } from "./feedback/feedback.component";
import { ContactComponent } from "../contact/contact.component";
import { PopupProjectComponent } from './projects/popup-project/popup-project.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, SkillsComponent, ProjectsComponent, FeedbackComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
