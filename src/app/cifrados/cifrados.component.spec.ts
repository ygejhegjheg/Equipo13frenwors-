import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradosComponent } from './cifrados.component';

describe('CifradosComponent', () => {
  let component: CifradosComponent;
  let fixture: ComponentFixture<CifradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CifradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
