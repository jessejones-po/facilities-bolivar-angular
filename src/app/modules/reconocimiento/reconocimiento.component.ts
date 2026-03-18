import { Component, computed, signal } from '@angular/core';
import { CERTIFICACIONES, TESTIMONIOS } from './data';

@Component({
  selector: 'app-reconocimiento',
  standalone: true,
  styles: `
    .testimonial-blur {
      filter: blur(1px);
    }
  `,
  template: `
    <section id="reconocimiento" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[72px] py-16 lg:py-[64px] scroll-mt-24 bg-white">
      <!-- Sección Superior: Certificaciones (layout Figma) -->
      <div class="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[40px]">
        <div class="flex flex-col gap-4">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#414141] text-base font-bold text-[#414141] w-fit">
            <span class="w-[9px] h-[9px] rounded-full bg-[#009250] shrink-0"></span>
            Reconocimiento
          </div>
          <h2 class="text-[36px] font-bold text-[#282828] leading-[1.4]">
            Certificaciones y cumplimiento
          </h2>
          <p class="text-[24px] font-normal text-[#282828] leading-[1.4]">
            Cumplimos los más altos estándares de calidad, seguridad y normatividad internacional.
          </p>
        </div>

        <div class="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-6 shrink-0">
          @for (cert of certificaciones; track cert.alt) {
            @if (cert.src) {
              <img
                [src]="cert.src"
                [alt]="cert.alt"
                class="shrink-0 object-contain"
                [class.w-[99.91px]]="cert.variant === 'icontec'"
                [class.h-[134px]]="cert.variant === 'icontec'"
                [class.w-[137.45px]]="cert.variant === 'ccs' || cert.variant === 'ruc'"
                [class.h-[66.6px]]="cert.variant === 'ccs' || cert.variant === 'ruc'"
                loading="lazy"
              />
            }
            @if (cert.variant === 'ccs' && !cert.src) {
              <span class="text-[#009250] font-bold text-xl italic shrink-0">CCS</span>
            }
            @if (cert.variant === 'ruc' && !cert.src) {
              <div class="flex items-center gap-2 shrink-0">
                <div class="w-5 h-5 rounded-full bg-[#ffdf58]"></div>
                <span class="text-[#2D2D2D] font-bold text-lg">RUC®</span>
              </div>
            }
          }
        </div>
      </div>

      <!-- Sección Inferior: Testimonios (layout Figma) -->
      <div class="pt-20 flex flex-col gap-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-[36px] font-bold text-[#282828] leading-[1.4]">
            Respaldamos a los líderes del mercado
          </h2>
          <p class="text-[24px] font-normal text-[#282828] leading-[1.4]">
            Cercanía y experticia para su tranquilidad operativa.
          </p>
        </div>

        <div class="relative overflow-hidden">
          <!-- Desktop: 3 tarjetas visibles, enfoque central -->
          <div class="hidden lg:block">
            <div class="flex justify-center">
              <div class="relative w-full max-w-[1200px] overflow-hidden">
                <div
                  class="flex justify-start gap-8 transition-transform duration-500 ease-out"
                  [style.transform]="'translateX(calc(50% - ' + (160 + scrollIndex() * 372) + 'px))'"
                >
                  @for (testimonio of testimoniosDisplay(); track trackByTestimonio($index, testimonio)) {
                    <div
                      class="flex-shrink-0 rounded-2xl bg-white border border-[#E1E1E1] p-8 transition-all duration-500 ease-out"
                      [class.w-[320px]]="!isCenterCard($index)"
                      [class.w-[360px]]="isCenterCard($index)"
                      [class.scale-105]="isCenterCard($index)"
                      [class.scale-95]="!isCenterCard($index)"
                      [class.opacity-100]="isCenterCard($index)"
                      [class.opacity-60]="!isCenterCard($index)"
                      [class.testimonial-blur]="!isCenterCard($index)"
                      [class.z-20]="isCenterCard($index)"
                      [class.z-10]="!isCenterCard($index)"
                      [class.shadow-2xl]="isCenterCard($index)"
                      [class.shadow-lg]="!isCenterCard($index)"
                    >
                      <span class="text-[#c2e2d9] text-7xl font-light leading-none block -mt-4 -ml-1">"</span>
                      <p
                        class="leading-[1.4] font-normal -mt-6 text-[#1B1B1B] transition-colors duration-500"
                        [class.text-[16px]]="isCenterCard($index)"
                        [class.text-[12px]]="!isCenterCard($index)"
                      >
                        {{ testimonio.quote }}
                      </p>
                      <div class="flex items-center gap-2 mt-6 pt-6 border-t border-[#E1E1E1]">
                        <img
                          [src]="testimonio.companyLogo"
                          [alt]="testimonio.companyName"
                          class="h-9 w-auto object-contain shrink-0"
                          loading="lazy"
                        />
                        <div class="flex flex-col gap-0.5">
                          <p
                            class="font-bold leading-[1.4] transition-colors duration-500"
                            [class.text-[18px]]="isCenterCard($index)"
                            [class.text-[14px]]="!isCenterCard($index)"
                            [class.text-[#1B1B1B]]="true"
                          >
                            {{ testimonio.author }}
                          </p>
                          <p
                            class="font-normal leading-[1.4] transition-colors duration-500"
                            [class.text-[18px]]="isCenterCard($index)"
                            [class.text-[14px]]="!isCenterCard($index)"
                            [class.text-[#1B1B1B]]="true"
                          >
                            {{ testimonio.role }}
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div class="flex justify-center gap-4 mt-10">
              <button
                type="button"
                (click)="prev()"
                class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-[#282828] hover:bg-gray-300 transition-colors"
                aria-label="Anterior"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                (click)="next()"
                class="w-12 h-12 rounded-full bg-[#ffdf58] flex items-center justify-center text-[#282828] hover:brightness-95 transition-colors"
                aria-label="Siguiente"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile: 1 tarjeta centrada -->
          <div class="lg:hidden">
            <div class="flex justify-center px-2">
              @if (testimonios[activeIndex()]; as testimonio) {
                <div
                  class="w-full max-w-[360px] rounded-2xl bg-white border border-[#E1E1E1] shadow-2xl p-8 transition-all duration-500"
                >
                  <span class="text-[#c2e2d9] text-7xl font-light leading-none block -mt-4 -ml-1">"</span>
                  <p class="text-[#1B1B1B] text-[16px] leading-[1.4] font-normal -mt-6">
                    {{ testimonio.quote }}
                  </p>
                  <div class="flex items-center gap-2 mt-6 pt-6 border-t border-[#E1E1E1]">
                    <img
                      [src]="testimonio.companyLogo"
                      [alt]="testimonio.companyName"
                      class="h-9 w-auto object-contain shrink-0"
                      loading="lazy"
                    />
                    <div class="flex flex-col gap-0.5">
                      <p class="font-bold text-[18px] text-[#1B1B1B] leading-[1.4]">{{ testimonio.author }}</p>
                      <p class="font-normal text-[18px] text-[#1B1B1B] leading-[1.4]">{{ testimonio.role }}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div class="flex justify-center gap-4 mt-10">
              <button
                type="button"
                (click)="prev()"
                class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-[#282828] hover:bg-gray-300 transition-colors"
                aria-label="Anterior"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                (click)="next()"
                class="w-12 h-12 rounded-full bg-[#ffdf58] flex items-center justify-center text-[#282828] hover:brightness-95 transition-colors"
                aria-label="Siguiente"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ReconocimientoComponent {
  protected readonly certificaciones = CERTIFICACIONES;
  protected readonly testimonios = TESTIMONIOS;

  protected readonly testimoniosDisplay = computed(() => [
    ...this.testimonios,
    ...this.testimonios,
  ]);

  protected readonly scrollIndex = signal(1);

  protected readonly activeIndex = computed(() => this.scrollIndex() % this.testimonios.length);

  protected isCenterCard(index: number): boolean {
    return index === this.scrollIndex();
  }

  protected trackByTestimonio(index: number, testimonio: (typeof TESTIMONIOS)[0]): string {
    return `${index}-${testimonio.author}`;
  }

  protected prev(): void {
    const total = this.testimoniosDisplay().length;
    const current = this.scrollIndex();
    this.scrollIndex.set(current === 0 ? total - 1 : current - 1);
  }

  protected next(): void {
    const total = this.testimoniosDisplay().length;
    const current = this.scrollIndex();
    this.scrollIndex.set(current === total - 1 ? 0 : current + 1);
  }
}
