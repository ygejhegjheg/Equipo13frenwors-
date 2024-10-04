import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicaciondosComponent } from './explicaciondos.component';

describe('ExplicaciondosComponent', () => {
  let component: ExplicaciondosComponent;
  let fixture: ComponentFixture<ExplicaciondosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplicaciondosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplicaciondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
