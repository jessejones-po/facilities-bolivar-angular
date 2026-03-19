import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRE_FOOTER } from '../footer.constants';

@Component({
  selector: 'app-pre-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section
      id="solicitar-diagnostico"
      class="w-full scroll-mt-24 bg-[#1a1a1a] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div
        class="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 text-center lg:text-left"
      >
        <div class="flex flex-col gap-2">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#4ADE80]">
            {{ preFooter.title }}
          </h2>
          <p class="text-white font-light text-base sm:text-lg max-w-xl">
            {{ preFooter.subtitle }}
          </p>
        </div>
        <div class="shrink-0">
          <a
            routerLink="/solicitar-diagnostico"
            class="inline-flex items-center justify-center rounded-full bg-[#FFD700] px-10 py-3 text-sm font-bold text-green-900 shadow-sm transition-all hover:brightness-95 xl:text-base"
          >
            {{ preFooter.ctaLabel }}
          </a>
        </div>
      </div>
    </section>
  `,
})
export class PreFooterComponent {
  readonly preFooter = PRE_FOOTER;
}
