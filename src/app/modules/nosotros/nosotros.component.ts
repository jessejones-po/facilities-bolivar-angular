import { Component } from '@angular/core';
import { FEATURES } from './data';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent {
  protected readonly features = FEATURES;
}
