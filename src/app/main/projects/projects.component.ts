import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PopupProjectComponent } from './popup-project/popup-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, NgIf, CommonModule, PopupProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  openPopup: boolean = false;
  arrowState: { [key: number]: boolean } = {};

  constructor() {}

  toggleArrow(index: number, show: boolean) {
    this.arrowState[index] = show;
  }
}
