import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PreFooterComponent } from '../footer/pre-footer/pre-footer.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { HomeComponent } from '../../../modules/home/home.component';
import { NosotrosComponent } from '../../../modules/nosotros/nosotros.component';
import { SolucionesComponent } from '../../../modules/soluciones/soluciones.component';
import { TecnologiaComponent } from '../../../modules/tecnologia/tecnologia.component';
import { ObrasCivilesComponent } from '../../../modules/obras-civiles/obras-civiles.component';
import { ReconocimientoComponent } from '../../../modules/reconocimiento/reconocimiento.component';
import { BlogComponent } from '../../../modules/blog/blog.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    PreFooterComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    SolucionesComponent,
    TecnologiaComponent,
    ObrasCivilesComponent,
    ReconocimientoComponent,
    BlogComponent,
  ],
  template: `
    <div class="min-h-screen bg-[#efefef] font-bolivar">
      <app-navbar />
      <app-home />
      <app-nosotros />
      <app-soluciones />
      <app-tecnologia />
      <app-obras-civiles />
      <app-reconocimiento />
      <app-blog />
      <app-pre-footer />
      <app-footer />
    </div>
  `,
})
export class LandingComponent {}
