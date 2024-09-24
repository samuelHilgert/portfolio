import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-project.component.html',
  styleUrls: ['./popup-project.component.scss'],
})
export class PopupProjectComponent {
  @Input() openPopup: boolean = false;

  constructor() {}
}
