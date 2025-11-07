import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasServicio } from './tareas-servicio';

describe('TareasServicio', () => {
  let component: TareasServicio;
  let fixture: ComponentFixture<TareasServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
