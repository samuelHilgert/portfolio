import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
export class SkillsComponent implements OnInit, OnDestroy {
  skills: Skill[] = [];

  constructor(private http: HttpClient) {
    this.loadSkills();
  }

  /**
   * This lifecycle hook is called when the component is initialized.
   * It initializes AOS (Animate On Scroll) with specific animation settings
   * such as duration, easing, and delay. AOS is responsible for animating
   * elements as they scroll into view.
   */
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
      offset: 0,
      delay: 200,
    });
  }

  /**
   * This lifecycle hook is called when the component is destroyed.
   * It refreshes AOS to ensure that any animations are properly cleaned up.
   * This is necessary to reset AOS behavior when the component is removed.
   */
  ngOnDestroy(): void {
    AOS.refresh();
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
