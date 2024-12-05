import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './shared/services/translationService';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet,
    RouterModule,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  title = 'portfolio';

  /**
   * Lifecycle hook called after the component has been initialized.
   * This method is used to initialize the language settings of the application
   * by calling the `initializeLanguage` method from the `TranslationService`.
   * It ensures that the correct language configuration is applied at the start of the app.
   */
  ngOnInit(): void {
    this.translationService.initializeLanguage();
  }
}
