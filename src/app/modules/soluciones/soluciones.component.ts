import { Component, computed, signal } from '@angular/core';
import { SOLUTION_ITEMS, SOLUTION_CONTENT_MAP } from './data';

@Component({
  selector: 'app-soluciones',
  standalone: true,
  templateUrl: './soluciones.component.html',
})
export class SolucionesComponent {
  protected readonly activeSolutionId = signal<string>('infraestructura');
  protected readonly solutionItems = SOLUTION_ITEMS;
  private readonly contentMap = SOLUTION_CONTENT_MAP;

  protected readonly activeContent = computed(() => {
    const id = this.activeSolutionId();
    return this.contentMap[id] ?? this.contentMap['infraestructura'];
  });

  protected setActiveSolution(id: string): void {
    this.activeSolutionId.set(id);
  }
}
