import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PopupProjectComponent } from './popup-project/popup-project.component';

interface Project {
  index: number;
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
  arrowState: { [key: number]: boolean} = {};

  project: Project = {
    index: 0,
    title: "",
    description: "",
    skills: "",
    imgStart: "",
    imgGameplay: ""
  };

  constructor() {}

  toggleArrow(index: number, show: boolean) {
    this.arrowState[index] = show;
    console.log(this.project);
  }
}
