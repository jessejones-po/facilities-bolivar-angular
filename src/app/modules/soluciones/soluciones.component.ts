import { Component, computed, signal } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { SOLUTION_ITEMS, SOLUTION_CONTENT_MAP } from './data';
import type { SolutionItem } from './types';

interface DisplayedContent {
  _trackId: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  icon: SolutionItem['icon'];
}

@Component({
  selector: 'app-soluciones',
  standalone: true,
  templateUrl: './soluciones.component.html',
  styles: `
    .solution-tab-idle:hover {
      background-color: rgb(250 250 249);
    }
  `,
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
    const tabMeta =
      this.solutionItems.find((s) => s.id === id) ?? this.solutionItems[0];
    return content && tabMeta
      ? [{ ...content, _trackId: id, icon: tabMeta.icon }]
      : [];
  });

  protected setActiveSolution(id: string): void {
    this.activeSolutionId.set(id);
  }
}
