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
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // console.log('success form send: ', response);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('send error: ', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { // ist nur zum Testen da, da es ansonsten nicht im localhost funktioniert. Dann auch mailTest rausnehemn in der Abfrage
      console.log('test mode activated: form send access: ', this.contactData);
      ngForm.resetForm();
    }
  }
}