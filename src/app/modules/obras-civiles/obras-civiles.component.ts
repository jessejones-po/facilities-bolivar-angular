import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OBRAS_CIVILES_CAPACIDADES } from './data';
import { ObrasCivilesImageViewerComponent } from './obras-civiles-image-viewer/obras-civiles-image-viewer.component';

@Component({
  selector: 'app-obras-civiles',
  standalone: true,
  imports: [ObrasCivilesImageViewerComponent, RouterLink],
  template: `
    <section id="obras-civiles" class="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <!-- Layout de dos columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Columna izquierda: Contenido -->
        <div class="flex flex-col gap-6">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-400 text-sm font-semibold text-[#2D2D2D] w-fit">
            <span class="w-2.5 h-2.5 rounded-full bg-[#009250] shrink-0"></span>
            Obras civiles
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-[#2D2D2D] leading-tight">
            Obras civiles sostenibles
          </h2>
          <div class="flex flex-col gap-6">
            <p class="text-lg text-[#2D2D2D] leading-relaxed">
              Promovemos y desarrollamos proyectos de construcción y remodelación que integran prácticas sostenibles, reduciendo el impacto ambiental, optimizando recursos.
            </p>
            <p class="text-lg text-[#2D2D2D] leading-relaxed">
              Creamos espacios que mejoran la calidad de vida y contribuyen al bienestar de las organizaciones.
            </p>
          </div>
          <a
            routerLink="/solicitar-diagnostico"
            class="inline-flex w-fit items-center justify-center rounded-2xl bg-[#FFD700] px-8 py-3 text-base font-bold text-green-900 shadow-sm transition-all hover:brightness-95"
          >
            Cotizar obra
          </a>
        </div>

        <!-- Columna derecha: Imagen -->
        <div class="relative">
          <app-obras-civiles-image-viewer />
        </div>
      </div>

      <!-- Franja de capacidades: barra gris clara, iconos 24px, etiquetas en mayúsculas -->
      <div class="mt-12 rounded-2xl bg-gray-50 px-4 py-6 lg:mt-16 lg:px-8">
        <div class="flex flex-wrap items-center justify-between gap-6 lg:gap-4">
          @for (item of capacidades; track item.label) {
            <div class="flex min-w-0 flex-1 basis-[45%] flex-col items-center gap-2 sm:basis-[30%] lg:basis-0 lg:flex-1 lg:flex-row lg:items-center lg:gap-3">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200/90 text-gray-700"
              >
                @switch (item.icon) {
                  @case ('paintbrush') {
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
                      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
                    </svg>
                  }
                  @case ('zap') {
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12H9l1-8z" />
                    </svg>
                  }
                  @case ('shield-check') {
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  }
                  @case ('video') {
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m22 8-6 4 6 4V8Z" />
                      <path d="M2 8v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    </svg>
                  }
                  @case ('hard-hat') {
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2Z" />
                      <path d="M10 10V5a3 3 0 0 1 6 0v5" />
                      <path d="M4 15v-1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1" />
                    </svg>
                  }
                }
              </div>
              <span class="text-[10px] font-medium uppercase leading-tight tracking-wide text-gray-600">{{
                item.label
              }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ObrasCivilesComponent {
  protected readonly capacidades = OBRAS_CIVILES_CAPACIDADES;
}
