import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosHTTPComponent } from './usuarios-http.component';

describe('UsuariosHTTPComponent', () => {
  let component: UsuariosHTTPComponent;
  let fixture: ComponentFixture<UsuariosHTTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosHTTPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
