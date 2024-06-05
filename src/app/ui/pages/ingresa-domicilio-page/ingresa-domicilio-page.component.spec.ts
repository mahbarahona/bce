import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresaDomicilioPageComponent } from './ingresa-domicilio-page.component';

describe('IngresaDomicilioPageComponent', () => {
  let component: IngresaDomicilioPageComponent;
  let fixture: ComponentFixture<IngresaDomicilioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresaDomicilioPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresaDomicilioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
