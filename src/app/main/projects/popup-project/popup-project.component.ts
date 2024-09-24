import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from './../projects.component';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

interface SkillImage {
  skill: string;
  img: string;
}

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
  skillImagesList: SkillImage[] = [];
  matchingSkillImages: SkillImage[] = []; // Gefilterte Skill-Images

  constructor(private http: HttpClient) {
    this.loadSkillImages(); // Lade die Skill-Images bei der Initialisierung
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['project']) {
      this.getMatchingSkillImages();
    }
    // console.log('Projekte: ', this.project);
  }

  loadSkillImages() {
    this.http.get<SkillImage[]>('assets/skills.json').subscribe((data: any) => {
      this.skillImagesList = data.skills;
      // console.log('Skill Images geladen:', this.skillImagesList);
      // Hier erneut filtern, falls nötig
      this.getMatchingSkillImages();
    });
  }

  getMatchingSkillImages() {
    if (this.project && this.project.skills) {
      // Skills des Projekts in ein Array umwandeln
      const projectSkillsArray = this.project.skills.split(', ').map(skill => skill.trim());

      // Filtern der passenden Images
      this.matchingSkillImages = this.skillImagesList.filter(skillImage =>
        projectSkillsArray.includes(skillImage.skill)
      );

      // console.log('Gefilterte Skill-Images:', this.matchingSkillImages);
    }
  }

  // Methode, um das Schließen-Event zu emittieren
  close() {
    this.closePopup.emit(); // Sendet ein Event an die Parent-Komponente
  }
}
