import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_ITEMS, CTA_NAV } from './nav.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly navItems = NAV_ITEMS;
  protected readonly ctaNav = CTA_NAV;

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  protected scrollToSection(moduleId: string, event?: Event): void {
    event?.preventDefault();
    this.closeMobileMenu();
    const el = document.getElementById(moduleId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
