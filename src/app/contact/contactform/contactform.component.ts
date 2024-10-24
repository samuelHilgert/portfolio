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

  onSubmit(ngForm: NgForm) {
    // console.log('Form submitted:', ngForm);
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // console.log('Success: ', response);
            ngForm.resetForm();
          },
          error: (error) => {
            // console.error('Send error: ', error);
          },
          complete: () =>  {
            this.sendSuccess = true;
            // console.info('Send post complete ' , this.sendSuccess);
            setTimeout(() => {
              this.sendSuccess = false;
            }, 3000);
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // console.log('Test mode: form submission success', this.contactData);
      ngForm.resetForm();
    }
  }
}

