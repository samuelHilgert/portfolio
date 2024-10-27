import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [TranslateModule,FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})

export class ContactformComponent {
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    termAccepted: false
  }

  mailTest = false;
  sendSuccess = false;

  post = {
    endPoint: 'https://samuelhilgert.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles form submission, performs validation, and sends an HTTP POST request.
   * Resets the form on success and toggles a success message display.
   * 
   * @param ngForm - Angular form object containing form state and control
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
          },
          complete: () =>  {
            this.sendSuccess = true;
            setTimeout(() => {
              this.sendSuccess = false;
            }, 3000);
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}

