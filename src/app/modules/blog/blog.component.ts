import { Component, computed } from '@angular/core';
import { BlogAccordionComponent } from './blog-accordion/blog-accordion.component';
import { BlogCarouselComponent } from './blog-carousel/blog-carousel.component';
import { BLOG_SECTION } from './blog.constants';
import { getFaqItems, getInitialOpenFaqId, getBlogPosts } from './data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogAccordionComponent, BlogCarouselComponent],
  template: `
    <section
      id="blog"
      class="mx-auto w-full max-w-[1440px] scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mb-8">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-4">
          <span class="w-2.5 h-2.5 rounded-full bg-[#009250] shrink-0"></span>
          <span class="text-[#000000] font-normal text-sm">{{ section().badge }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#000000] leading-tight">
          {{ section().titlePrefix }}
          <span class="text-[#009250]">{{ section().titleHighlight }}</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-start">
        <div class="w-full">
          <app-blog-accordion [items]="faqItems()" [initialOpenId]="initialOpenFaqId()" />
        </div>
        <div class="w-full">
          <app-blog-carousel [posts]="blogPosts()" />
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {
  readonly section = computed(() => BLOG_SECTION);
  readonly faqItems = computed(() => getFaqItems());
  readonly initialOpenFaqId = computed(() => getInitialOpenFaqId());
  readonly blogPosts = computed(() => getBlogPosts());
}
