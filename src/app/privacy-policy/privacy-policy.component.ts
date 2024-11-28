import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/services/translationService';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/hero/header/header.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private router: Router
    ) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * This method sets the overflow settings for the translation service to 
   * 'popup', typically used to adjust the display settings of the 
   * application when the privacy policy component is rendered.
   */
  ngOnInit(): void {
    this.translationService.setOverflowSettings('popup');
  }

  /**
   * Closes the privacy policy component and navigates the user back 
   * to the home page. This method resets the overflow settings for 
   * the translation service to 'default', ensuring that any necessary 
   * configuration changes made while displaying the privacy policy 
   * are reverted.
   */
  close() {
    this.translationService.setOverflowSettings('default');
    this.router.navigate(['/']);
  }

  /**
   * Closes the privacy policy popup when a click is detected outside 
   * of the popup area. This method calls the `close` function to 
   * handle the closing logic.
   * @param event The mouse click event that triggered this method.
   */
  closePopupOnClickOutside(event: MouseEvent) {
    this.close();
  }
}
