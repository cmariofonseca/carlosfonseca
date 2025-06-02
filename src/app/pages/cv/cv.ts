import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-cv',
  imports: [],
  standalone: true,
  templateUrl: './cv.html',
  styles: ``,
})
export class Cv implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = '/docs/cv-carlos-fonseca-2025.pdf';
    }
  }
}
