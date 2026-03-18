import { Component } from '@angular/core';
import { LEGAL_LINKS, SOCIAL_LINKS, COPYRIGHT } from '../footer.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="w-full bg-[#009250] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="max-w-[1440px] mx-auto flex flex-col items-center gap-8 text-center">
        <nav class="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-4">
          @for (link of legalLinks; track link.href) {
            <a
              [href]="link.href"
              class="text-white text-sm font-light hover:underline transition-opacity"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <div class="flex items-center justify-center gap-6">
          @for (social of socialLinks; track social.icon) {
            <a
              [href]="social.href"
              [attr.aria-label]="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:opacity-80 transition-opacity"
            >
              @switch (social.icon) {
                @case ('youtube') {
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                }
                @case ('linkedin') {
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }
              }
            </a>
          }
        </div>

        <p class="text-white text-sm font-light">
          {{ copyright }}
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly legalLinks = LEGAL_LINKS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly copyright = COPYRIGHT;
}
