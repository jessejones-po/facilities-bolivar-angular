import { Component } from '@angular/core';

@Component({
  selector: 'app-obras-civiles-image-viewer',
  standalone: true,
  template: `
    <div class="relative inline-block w-full">
      <div class="relative w-full overflow-hidden rounded-3xl">
        <img
          src="assets/Obrasciviles.jpg"
          alt="Obras civiles sostenibles"
          class="w-full h-full min-h-[320px] lg:min-h-[480px] object-cover rounded-3xl"
          loading="lazy"
        />

        <!-- Punto de anclaje -->
        <div
          class="absolute w-2 h-2 rounded-full bg-white shadow-sm animate-obras-anchor"
          style="top: 22%; left: 28%;"
        ></div>

        <!-- Línea conectora (de anclaje a tooltip) -->
        <div
          class="absolute left-[28%] -translate-x-1/2 w-[1px] bg-white/90 animate-obras-line"
          style="top: 22%; height: 10%;"
        ></div>

        <!-- Tooltip (cuadrante superior izquierdo) -->
        <div
          class="absolute bg-[#F0F0F0] rounded-2xl px-4 py-2.5 shadow-md animate-obras-tooltip"
          style="top: 33%; left: 6%;"
        >
          <span class="text-[#009250] font-medium text-sm">+500 </span>
          <span class="text-[#2D2D2D] font-medium text-sm">Obras entregadas</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes obras-tooltip-enter {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes obras-line-enter {
        from {
          opacity: 0;
          transform: scaleY(0);
        }
        to {
          opacity: 1;
          transform: scaleY(1);
        }
      }
      @keyframes obras-anchor-enter {
        from {
          opacity: 0;
          transform: translateY(-4px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-obras-tooltip {
        animation: obras-tooltip-enter 0.5s ease-out 0.2s both;
      }
      .animate-obras-line {
        transform-origin: top center;
        animation: obras-line-enter 0.4s ease-out 0.1s both;
      }
      .animate-obras-anchor {
        animation: obras-anchor-enter 0.3s ease-out both;
      }
    `,
  ],
})
export class ObrasCivilesImageViewerComponent {}
