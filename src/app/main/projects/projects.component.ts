import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PopupProjectComponent } from './popup-project/popup-project.component';
import { HttpClient } from '@angular/common/http';

export interface Project {
  id: number,
  title: string,
  description: string,
  skills: string,
  imgStart: string,
  imgGameplay: string,
  gitHub: string,
  liveTest: string
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
  projectList: Project[] = [];
  selectedProject: Project | null = null;

  constructor(private http: HttpClient) {
    this.loadProjectDataFromJson();
  }

  loadProjectDataFromJson() {
    this.http.get<Project[]>('assets/projects.json').subscribe((data: any) => {
      this.projectList = data.projects;
      // console.log(data.projects);
      // console.log(this.projectList);
    });
  }

  toggleArrow(index: number, show: boolean) {
    this.arrowState[index] = show;
  }

  // Methode, um das ausgewählte Projekt zu setzen
  openProjectPopup(i: number) {
    // console.log('Selected Project Index:', i);
    // console.log('Project List:', this.projectList);

    if (this.projectList.length > 0) {
      this.selectedProject = this.projectList[i]; // Wähle das Projekt basierend auf dem Index aus
      this.openPopup = true;
    } else {
      console.error('projectList is empty or not loaded yet.');
    }
  }

  // Methode zum Schließen des Popups
  closeProjectPopup() {
    this.openPopup = false;
    this.selectedProject = null;
  }
}
