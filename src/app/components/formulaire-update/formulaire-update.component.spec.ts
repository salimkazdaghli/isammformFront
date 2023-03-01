import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUpdateComponent } from './formulaire-update.component';

describe('FormulaireUpdateComponent', () => {
  let component: FormulaireUpdateComponent;
  let fixture: ComponentFixture<FormulaireUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
