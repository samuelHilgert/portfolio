import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PopupProjectComponent } from './popup-project/popup-project.component';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from '../../shared/services/translationService';

export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string;
  imgStart: string;
  imgGameplay: string;
  gitHub: string;
  liveTest: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    TranslateModule,
    NgIf,
    CommonModule,
    PopupProjectComponent
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  openPopup: boolean = false;
  arrowState: { [key: number]: boolean } = {};
  projectList: Project[] = [];
  selectedProject: Project | null = null;

  constructor(
    private http: HttpClient,
    private translationService: TranslationService
  ) {
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
    this.translationService.setOverflowSettings('popup');

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
    this.translationService.setOverflowSettings('default');
  }

  // Methode, um zum nächsten Projekt zu wechseln
  nextProject() {
    if (this.selectedProject) {
      const currentIndex = this.projectList.findIndex(
        (proj) => proj.id === this.selectedProject?.id
      );

      if (currentIndex >= 0 && currentIndex < this.projectList.length - 1) {
        this.selectedProject = this.projectList[currentIndex + 1];
      } else {
        this.selectedProject = this.projectList[0];
      }
    }
  }
}
