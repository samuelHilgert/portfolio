import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() linkClicked = new EventEmitter<void>();

  /**
   * This method is called when a link in the navbar is clicked.
   * It emits an event through the `linkClicked` EventEmitter to notify the parent component
   * that a link has been clicked. The parent component can then handle the event accordingly.
   *
   */
  onLinkClick() {
    this.linkClicked.emit();
  }
}
