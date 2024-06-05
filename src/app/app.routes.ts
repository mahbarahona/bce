import { Routes } from '@angular/router';
import { LoginPageComponent } from './ui/pages/login-page/login-page.component';
import { PAGES } from './navigation/navigation.service';

export const routes: Routes = [
  {
    path: PAGES['LOGIN'],
    component: LoginPageComponent,
  },
  {
    path: PAGES['INGRESA_DOMICILIO'],
    loadComponent: () =>
      import(
        './ui/pages/ingresa-domicilio-page/ingresa-domicilio-page.component'
      ).then((c) => c.IngresaDomicilioPageComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
