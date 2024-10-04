import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradodosComponent } from './cifradodos.component';

describe('CifradodosComponent', () => {
  let component: CifradodosComponent;
  let fixture: ComponentFixture<CifradodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CifradodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifradodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
