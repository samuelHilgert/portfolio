import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from "./shared/footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";
import { PopupProjectComponent } from './main/projects/popup-project/popup-project.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TranslationService } from './shared/services/translationService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainComponent, FooterComponent, TranslateModule, PrivacyPolicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService) {}
  title = 'portfolio';
  
  ngOnInit(): void {
    this.translationService.initializeLanguage();
  }
}