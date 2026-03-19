import { Component, computed, signal } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { SOLUTION_ITEMS, SOLUTION_CONTENT_MAP } from './data';

interface DisplayedContent {
  _trackId: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-soluciones',
  standalone: true,
  templateUrl: './soluciones.component.html',
  styles: [
    `
      .soluciones-tab-inactive {
        opacity: 0.7;
      }
      .soluciones-tab-inactive:hover {
        opacity: 1;
        transform: scale(1.02);
      }
    `,
  ],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' })),
      ]),
    ]),
  ],
})
export class SolucionesComponent {
  protected readonly activeSolutionId = signal<string>('infraestructura');
  protected readonly solutionItems = SOLUTION_ITEMS;
  private readonly contentMap = SOLUTION_CONTENT_MAP;

  protected readonly displayedItems = computed<DisplayedContent[]>(() => {
    const id = this.activeSolutionId();
    const content = this.contentMap[id] ?? this.contentMap['infraestructura'];
    return content ? [{ ...content, _trackId: id }] : [];
  });

  protected setActiveSolution(id: string): void {
    this.activeSolutionId.set(id);
  }
}
