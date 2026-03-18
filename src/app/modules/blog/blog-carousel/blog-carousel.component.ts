import { Component, input, signal, computed, viewChild, ElementRef, AfterViewInit } from '@angular/core';
import type { BlogPost } from '../types';

@Component({
  selector: 'app-blog-carousel',
  standalone: true,
  template: `
    <div class="flex flex-col gap-6">
      <div
        #scrollContainer
        class="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory flex gap-6 pb-2 -mx-1 px-1"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >
        @for (post of posts(); track post.id) {
          <div
            class="snap-center shrink-0 w-[min(100%,340px)] sm:w-[min(100%,380px)] rounded-2xl overflow-hidden bg-white shadow-sm"
          >
            <div class="aspect-[5/3] overflow-hidden">
              <img
                [src]="post.imageUrl"
                [alt]="post.title"
                class="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div class="bg-[#efefef] px-5 py-4">
              <h3 class="font-normal text-[#000000] text-base mb-3 line-clamp-2">
                {{ post.title }}
              </h3>
              <a
                [href]="'/blog/' + post.slug"
                class="inline-flex items-center gap-2 font-light text-[#009250] text-sm hover:underline"
              >
                Leer más
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        }
      </div>

      <div class="flex items-center justify-center gap-3">
        <button
          type="button"
          (click)="prev()"
          class="w-10 h-10 rounded-full border border-gray-300 bg-[#efefef] flex items-center justify-center text-[#000000] hover:bg-gray-200 transition-colors disabled:opacity-50"
          [disabled]="currentIndex() === 0"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          (click)="next()"
          class="w-10 h-10 rounded-full bg-[#ffdf58] flex items-center justify-center text-white hover:bg-[#f5d547] transition-colors disabled:opacity-50"
          [disabled]="currentIndex() >= maxIndex()"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  `,
})
export class BlogCarouselComponent implements AfterViewInit {
  posts = input.required<BlogPost[]>();

  scrollContainer = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');

  currentIndex = signal(0);

  maxIndex = computed(() => Math.max(0, this.posts().length - 1));

  ngAfterViewInit(): void {
    const el = this.scrollContainer()?.nativeElement;
    if (el) {
      el.addEventListener('scroll', () => this.updateIndexFromScroll(el));
    }
  }

  private updateIndexFromScroll(el: HTMLDivElement): void {
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;
    const cardWidth = first.offsetWidth + 24;
    const index = Math.round(el.scrollLeft / cardWidth);
    this.currentIndex.set(Math.min(Math.max(0, index), this.maxIndex()));
  }

  prev(): void {
    const el = this.scrollContainer()?.nativeElement;
    if (el && el.firstElementChild) {
      const cardWidth = (el.firstElementChild as HTMLElement).offsetWidth;
      el.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
      this.currentIndex.update((i) => Math.max(0, i - 1));
    }
  }

  next(): void {
    const el = this.scrollContainer()?.nativeElement;
    if (el && el.firstElementChild) {
      const cardWidth = (el.firstElementChild as HTMLElement).offsetWidth;
      el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
      this.currentIndex.update((i) => Math.min(this.maxIndex(), i + 1));
    }
  }
}
