import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, SkillsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
