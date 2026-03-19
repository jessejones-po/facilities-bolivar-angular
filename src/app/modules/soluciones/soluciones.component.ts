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
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ opacity: 0 })),
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
