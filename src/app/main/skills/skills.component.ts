import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  skill: string;
  img: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, HttpClientModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [];

  constructor(private http: HttpClient) {
    this.loadSkills();
  }

  /**
   * Loads skills data from a JSON file and assigns it to the skills array.
   * The function makes an HTTP GET request to retrieve skill information
   * from `assets/skills.json`, which is expected to contain an array of
   * skill objects. Once the data is received, it is stored in the
   * `skills` property for use in the component's template.
   */
  loadSkills() {
    this.http.get<Skill[]>('assets/skills.json').subscribe((data: any) => {
      this.skills = data.skills;
    });
  }
}
