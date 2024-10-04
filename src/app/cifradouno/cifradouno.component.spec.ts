import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradounoComponent } from './cifradouno.component';

describe('CifradounoComponent', () => {
  let component: CifradounoComponent;
  let fixture: ComponentFixture<CifradounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CifradounoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifradounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
