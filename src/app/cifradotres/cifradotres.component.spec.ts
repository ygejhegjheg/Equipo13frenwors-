import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradotresComponent } from './cifradotres.component';

describe('CifradotresComponent', () => {
  let component: CifradotresComponent;
  let fixture: ComponentFixture<CifradotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CifradotresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifradotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
