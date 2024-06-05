import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  goTo(route: Page): void {
    this.router.navigate([route]);
  }
}

export type Page = 'login' | 'recuperar-contrasena' | 'ingresa-domicilio';
export const PAGES: { [k: string]: Page } = {
  RECUPERAR_CONTRASENA: 'recuperar-contrasena',
  LOGIN: 'login',
  INGRESA_DOMICILIO: 'ingresa-domicilio',
} as const;
