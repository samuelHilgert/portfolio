import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PopupProjectComponent } from './popup-project/popup-project.component';
import { HttpClient } from '@angular/common/http';

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string;
  imgStart: string;
  imgGameplay: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, NgIf, CommonModule, PopupProjectComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  openPopup: boolean = false;
  arrowState: { [key: number]: boolean } = {};
  project: Project[] = [];

  constructor(private http: HttpClient) {
    this.loadProjectDataFromJson();
  }

  loadProjectDataFromJson() {
    this.http.get<Project[]>('assets/projects.json').subscribe((data: any) => {
      this.project = data.projects;
      // console.log(data.projects);
      console.log(this.project);
    });
  }

  toggleArrow(index: number, show: boolean) {
    this.arrowState[index] = show;
  }
}
