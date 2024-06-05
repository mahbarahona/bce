import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  NavigationService,
  PAGES,
} from '../../../navigation/navigation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  user = {
    name: 'Valentina',
  };
  RECUPERAR_CLAVE = `/${PAGES['RECUPERAR_CONTRASENA']}`;

  constructor(private nav: NavigationService) {}

  login() {
    this.nav.goTo('ingresa-domicilio');
  }
}
