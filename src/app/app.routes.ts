import { Routes } from '@angular/router';
import { LandingComponent } from './core/layout/landing/landing.component';
import { SolicitarDiagnosticoComponent } from './modules/solicitar-diagnostico/solicitar-diagnostico.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'solicitar-diagnostico', component: SolicitarDiagnosticoComponent },
  { path: '**', redirectTo: '' },
];
