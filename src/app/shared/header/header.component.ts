import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  // Angular Material Modul importieren
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineComponent } from './headline/headline.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, NavbarComponent, HeadlineComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
