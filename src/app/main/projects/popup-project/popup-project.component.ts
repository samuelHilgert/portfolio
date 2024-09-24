import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from './../projects.component';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-popup-project',
  standalone: true,
  imports: [CommonModule, NgIf, TranslateModule],
  templateUrl: './popup-project.component.html',
  styleUrls: ['./popup-project.component.scss'],
})
export class PopupProjectComponent implements OnChanges {
  @Input() openPopup: boolean = false;
  @Input() project!: Project;

  @Output() closePopup: EventEmitter<void> = new EventEmitter(); // EventEmitter für Popup-Schließen

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['project']) {
      console.log('Ausgewähltes Projekt:', this.project);
    }
  }

  // Methode, um das Schließen-Event zu emittieren
  close() {
    this.closePopup.emit(); // Sendet ein Event an die Parent-Komponente
  }
}
