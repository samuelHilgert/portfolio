import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  // Angular Material Modul importieren
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
