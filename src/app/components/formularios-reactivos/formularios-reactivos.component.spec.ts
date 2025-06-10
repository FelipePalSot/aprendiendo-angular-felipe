import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosReactivosComponent } from './formularios-reactivos.component';

describe('FormulariosReactivosComponent', () => {
  let component: FormulariosReactivosComponent;
  let fixture: ComponentFixture<FormulariosReactivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosReactivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
