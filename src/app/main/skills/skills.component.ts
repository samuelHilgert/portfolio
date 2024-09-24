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

  loadSkills() {
    this.http.get<Skill[]>('assets/skills.json')
    .subscribe((data: any) => {
      this.skills = data.skills;
    });
  }
}
