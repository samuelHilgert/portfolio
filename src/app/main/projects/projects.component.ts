import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  arrowState: { [key: number]: boolean } = {};

  constructor() {}

  toggleArrow(index: number, show: boolean) {
    this.arrowState[index] = show;
  }
}
