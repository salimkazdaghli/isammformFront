import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseNewComponent } from './reponse-new.component';

describe('ReponseNewComponent', () => {
  let component: ReponseNewComponent;
  let fixture: ComponentFixture<ReponseNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReponseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
