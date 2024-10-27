import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from './../projects.component';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

interface SkillImage {
  skill: string;
  img: string;
  img_green: string;
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
  @Output() closePopup: EventEmitter<void> = new EventEmitter(); 
  @Output() nextProject: EventEmitter<void> = new EventEmitter();

  skillImagesList: SkillImage[] = [];
  matchingSkillImages: SkillImage[] = [];

  constructor(private http: HttpClient) {
    this.loadSkillImages(); 
  }

  /**
   * Lifecycle hook that is called when input properties change
   * @param changes Object containing changes to input properties
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['project']) {
      this.getMatchingSkillImages();
    }
  }

  /**
   * Loads skill images from a JSON file and assigns them to skillImagesList
   */
  loadSkillImages() {
    this.http.get<SkillImage[]>('assets/skills.json').subscribe((data: any) => {
      this.skillImagesList = data.skills;
      this.getMatchingSkillImages();
    });
  }

  /**
   * Finds skill images that match the skills listed in the current project
   */
  getMatchingSkillImages() {
    if (this.project && this.project.skills) {
      const projectSkillsArray = this.project.skills.split(', ').map(skill => skill.trim());
      this.matchingSkillImages = this.skillImagesList.filter(skillImage =>
        projectSkillsArray.includes(skillImage.skill)
      );
    }
  }

  /**
   * Emits the closePopup event to close the project popup
   */
  close() {
    this.closePopup.emit();
  }

  /**
   * Emits the nextProject event to load the next project in the list
   */
  loadNextProject() {
    this.nextProject.emit();
  }

  /**
   * Closes the popup if a click is detected outside of it
   * @param event The mouse click event
   */
  closePopupOnClickOutside(event: MouseEvent) {
    this.close();
  }
}
