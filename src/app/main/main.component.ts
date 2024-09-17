import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
