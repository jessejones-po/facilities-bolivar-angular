import { Component } from '@angular/core';

@Component({
  selector: 'app-drone-tech-viewer',
  standalone: true,
  template: `
    <div class="relative inline-block w-full">
      <div class="relative w-full overflow-hidden rounded-3xl">
        <img
          src="assets/Tecnologia.png"
          alt="Inspección técnica con drones y sensores térmicos"
          class="w-full h-full min-h-[320px] lg:min-h-[480px] object-cover rounded-3xl"
          loading="lazy"
        />

        <!-- Punto de anclaje (círculo blanco en la cámara del dron) -->
        <div
          class="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-sm animate-drone-anchor"
          style="top: 38%;"
        ></div>

        <!-- Línea conectora (CSS puro) -->
        <div
          class="absolute left-1/2 -translate-x-1/2 w-[1px] bg-white/90 animate-drone-line"
          style="top: 38%; bottom: 22%;"
        ></div>

        <!-- Tooltip / Píldora de información -->
        <div
          class="absolute left-1/2 -translate-x-1/2 bg-[#F0F0F0] rounded-2xl px-4 py-2.5 shadow-md animate-drone-tooltip"
          style="bottom: 10%;"
        >
          <span class="text-[#2D2D2D] font-medium text-sm">Sensores </span>
          <span class="text-[#009250] font-medium text-sm">térmicos</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes drone-tooltip-enter {
        from {
          opacity: 0;
          transform: translate(-50%, 8px);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
      @keyframes drone-line-enter {
        from {
          opacity: 0;
          transform: translate(-50%, 0) scaleY(0);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0) scaleY(1);
        }
      }
      @keyframes drone-anchor-enter {
        from {
          opacity: 0;
          transform: translate(-50%, -4px);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
      .animate-drone-tooltip {
        animation: drone-tooltip-enter 0.5s ease-out 0.2s both;
      }
      .animate-drone-line {
        transform-origin: top center;
        animation: drone-line-enter 0.4s ease-out 0.1s both;
      }
      .animate-drone-anchor {
        animation: drone-anchor-enter 0.3s ease-out both;
      }
    `,
  ],
})
export class DroneTechViewerComponent {}
