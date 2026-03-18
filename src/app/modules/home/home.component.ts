import { Component } from '@angular/core';
import { STATS } from './data';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected readonly stats = STATS;
}
