import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './shared/hero/hero.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './shared/services/translationService';
import { HeaderComponent } from './shared/header/header.component';
import { RoutingService } from './shared/services/routingService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet,
    HeroComponent,
    MainComponent,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  isRoutingActivated: boolean = true;
  private routingSubscription: Subscription = new Subscription();

  constructor(
    private translationService: TranslationService,
    private routingService: RoutingService
  ) {}

  title = 'portfolio';

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * This method calls `initializeLanguage` from the TranslationService to set up
   * the initial language configuration for the application.
   */
  ngOnInit(): void {
    this.translationService.initializeLanguage();
    this.routingSubscription = this.routingService.activatePrivacy$.subscribe(
      (isActive) => {
        this.isRoutingActivated = isActive;
      }
    );
  }

  /**
   * Lifecycle hook that is called when the component is about to be destroyed.
   * This method ensures that the subscription to the `activatePrivacy$` observable is properly cleaned up.
   * It prevents memory leaks by unsubscribing from the observable when the component is destroyed.
   */
  ngOnDestroy(): void {
    if (this.routingSubscription) {
      this.routingSubscription.unsubscribe();
    }
  }
}
