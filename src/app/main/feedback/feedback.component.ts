import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  currentFeedbackIndex: number = 0;
  animationDirection: string = 'next';
  animationClass: string = '';

  feedbackList = [
    {
      author: 'L. Pan',
      role: 'feedback.l_pan_role',
      messageKey: 'feedback.l_pan',
    },
    {
      author: 'G. Heinrich',
      role: 'feedback.g_heinrich_role',
      messageKey: 'feedback.g_heinrich',
    },
    {
      author: 'E. Henriks',
      role: 'feedback.e_henriks_role',
      messageKey: 'feedback.e_henriks',
    },
  ];

  constructor() {}

  toggleFeedback(direction: string): void {
    // Setze die Animationsklasse neu für das Sliden
    this.animationClass = '';  // Entferne die Klasse
    setTimeout(() => {
      this.animationDirection = direction;
      this.animationClass = direction === 'next' ? 'move-left' : 'move-right'; // Füge die neue Klasse hinzu

      if (direction === 'prev') {
        this.currentFeedbackIndex =
          this.currentFeedbackIndex > 0
            ? this.currentFeedbackIndex - 1
            : this.feedbackList.length - 1;
      } else if (direction === 'next') {
        this.currentFeedbackIndex =
          this.currentFeedbackIndex < this.feedbackList.length - 1
            ? this.currentFeedbackIndex + 1
            : 0;
      }
    }, 10); // Ein kurzer Timeout, um die Klasse zu entfernen und wieder hinzuzufügen
  }

  getAnimationClass() {
    return this.animationClass;
  }

  get currentFeedback() {
    return this.feedbackList[this.currentFeedbackIndex];
  }

  get lastFeedback() {
    const lastIndex =
      this.currentFeedbackIndex === 0
        ? this.feedbackList.length - 1
        : this.currentFeedbackIndex - 1;
    return this.feedbackList[lastIndex];
  }

  get nextFeedback() {
    const nextIndex =
      this.currentFeedbackIndex === this.feedbackList.length - 1
        ? 0
        : this.currentFeedbackIndex + 1;
    return this.feedbackList[nextIndex];
  }
}
