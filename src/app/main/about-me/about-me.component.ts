import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})

export class AboutMeComponent implements OnInit, OnDestroy {
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
}
