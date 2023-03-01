import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireNewComponent } from './formulaire-new.component';

describe('FormulaireNewComponent', () => {
  let component: FormulaireNewComponent;
  let fixture: ComponentFixture<FormulaireNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
