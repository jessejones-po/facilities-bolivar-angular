import { Component, input, signal, effect } from '@angular/core';
import type { FaqItem } from '../types';

@Component({
  selector: 'app-blog-accordion',
  standalone: true,
  template: `
    <div class="flex flex-col gap-3">
      @for (item of items(); track item.id) {
        <div
          class="rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-white"
          [class.border-2]="true"
          [class.border-[#009250]]="openId() === item.id"
          [class.border-gray-200]="openId() !== item.id"
        >
          <button
            type="button"
            (click)="toggle(item.id)"
            class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors"
            [class.bg-[#efefef]]="openId() === item.id"
            [class.bg-white]="openId() !== item.id"
          >
            <span
              class="font-normal text-base flex-1"
              [class.text-[#009250]]="openId() === item.id"
              [class.text-[#000000]]="openId() !== item.id"
            >
              {{ item.question }}
            </span>
            @if (openId() === item.id) {
              <svg
                class="w-5 h-5 shrink-0 text-[#009250]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            } @else {
              <svg
                class="w-5 h-5 shrink-0 text-[#000000]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            }
          </button>
          <div
            class="grid transition-[grid-template-rows] duration-300 ease-in-out"
            [style.grid-template-rows]="openId() === item.id ? '1fr' : '0fr'"
          >
            <div class="min-h-0 overflow-hidden">
              <div class="px-5 pb-4 pt-0">
                <p class="font-light text-[#000000] text-base leading-relaxed">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
})
export class BlogAccordionComponent {
  items = input.required<FaqItem[]>();
  initialOpenId = input<string | null>(null);
  openId = signal<string | null>(null);

  constructor() {
    effect(() => {
      const init = this.initialOpenId();
      if (init !== null && this.openId() === null) {
        this.openId.set(init);
      }
    });
  }

  toggle(id: string): void {
    this.openId.update((current) => (current === id ? null : id));
  }
}
