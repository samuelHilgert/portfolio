import { Component } from '@angular/core';
import { ContentBoxComponent } from '../content-box/content-box.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ContentBoxComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
