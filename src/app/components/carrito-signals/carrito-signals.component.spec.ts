import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoSignalsComponent } from './carrito-signals.component';

describe('CarritoSignalsComponent', () => {
  let component: CarritoSignalsComponent;
  let fixture: ComponentFixture<CarritoSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
