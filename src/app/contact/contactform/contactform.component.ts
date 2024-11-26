import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [TranslateModule,FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})

export class ContactformComponent implements OnInit, OnDestroy {
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
 * This lifecycle hook is called when the component is initialized.
 * It initializes AOS (Animate On Scroll) with specific animation settings
 * such as duration, easing, and delay. AOS is responsible for animating
 * elements as they scroll into view.
 */
  ngOnInit(): void {
    AOS.init({
      duration: 500,
      easing: 'ease-in',
      once: true,
      offset: 0,
      delay: 200, 
    });
  }

/**
 * This lifecycle hook is called when the component is destroyed.
 * It refreshes AOS to ensure that any animations are properly cleaned up.
 * This is necessary to reset AOS behavior when the component is removed.
 */
  ngOnDestroy(): void {
    AOS.refresh();
  }

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

