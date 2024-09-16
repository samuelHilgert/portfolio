import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, AboutMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
