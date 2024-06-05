import { TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingresa-domicilio-page',
  standalone: true,
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './ingresa-domicilio-page.component.html',
  styleUrl: './ingresa-domicilio-page.component.scss',
})
export class IngresaDomicilioPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  regions = [
    { id: 1, name: 'Región de Arica y Parinacota' },
    { id: 2, name: 'Región de Tarapacá' },
    { id: 3, name: 'Región de Antofagasta' },
    { id: 4, name: 'Región de Atacama' },
    { id: 5, name: 'Región de Coquimbo' },
    { id: 6, name: 'Región de Valparaíso' },
    { id: 7, name: 'Región Metropolitana de Santiago' },
    { id: 8, name: "Región del Libertador General Bernardo O'Higgins" },
    { id: 9, name: 'Región del Maule' },
    { id: 10, name: 'Región de Ñuble' },
    { id: 11, name: 'Región del Biobío' },
    { id: 12, name: 'Región de La Araucanía' },
    { id: 13, name: 'Región de Los Ríos' },
    { id: 14, name: 'Región de Los Lagos' },
    { id: 15, name: 'Región de Aysén del General Carlos Ibáñez del Campo' },
    { id: 16, name: 'Región de Magallanes y de la Antártica Chilena' },
  ];
  subs$ = new Subscription();
  constructor(private fb: FormBuilder) {}
  ngOnDestroy(): void {
    this.subs$?.unsubscribe();
  }

  ngOnInit(): void {
    this.form = this.createForm();
    const sinNumeroSubs$ = this.form
      .get('sinNumero')
      ?.valueChanges.subscribe((v) => {
        if (v) {
          this.form.get('numero')?.disable();
        } else {
          this.form.get('numero')?.enable();
        }
      });
    this.subs$.add(sinNumeroSubs$);
  }

  submit() {
    if (this.form.invalid) {
      console.warn('invalid form.');
      return;
    }
    //
    console.log(this.form.value);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      region: ['', [Validators.required]],
      sector: [''],
      numero: ['', [Validators.required]],
      sinNumero: [false, [Validators.required]],
    });
  }
}
