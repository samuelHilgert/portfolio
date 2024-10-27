import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {}
