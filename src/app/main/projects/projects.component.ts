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
  imports: [TranslateModule, NgIf, CommonModule, PopupProjectComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  openPopup: boolean = false;
  arrowState: { [key: number]: boolean } = {};
  projectList: Project[] = [];
  selectedProject: Project | null = null;
  private lastScrollPosition = 0;

  constructor(
    private http: HttpClient,
    private translationService: TranslationService
  ) {
    this.loadProjectDataFromJson();
  }

  /**
   * Loads project data from a JSON file and assigns it to projectList
   */
  loadProjectDataFromJson() {
    this.http.get<Project[]>('assets/projects.json').subscribe((data: any) => {
      this.projectList = data.projects;
    });
  }

  /**
   * Toggles the arrow's visibility for a project item
   * @param index The index of the project item
   * @param show Whether to show (true) or hide (false) the arrow
   */
  toggleArrow(index: number, show: boolean) {
    this.arrowState[index] = show;
  }

  /**
   * Opens the popup for a selected project and sets overflow behavior for popup display
   * @param i Index of the selected project in projectList
   */
  openProjectPopup(i: number) {
    this.lastScrollPosition = window.scrollY;
    document.body.classList.add('no-scroll');
    this.translationService.setOverflowSettings('popup');
    if (this.projectList.length > 0) {
      this.selectedProject = this.projectList[i];
      this.openPopup = true;
    } else {
      console.error('projectList is empty or not loaded yet.');
    }
  }

  /**
   * Closes the project popup and resets overflow behavior
   */
  closeProjectPopup() {
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.classList.remove('no-scroll');
    this.openPopup = false;
    this.selectedProject = null;
    this.translationService.setOverflowSettings('default');
    window.scrollTo(0, this.lastScrollPosition);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 0);
  }

  /**
   * Moves to the next project in the list; wraps around if at the end
   */
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
