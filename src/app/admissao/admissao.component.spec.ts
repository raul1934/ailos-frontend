import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissaoComponent } from './admissao.component';

describe('AdmissaoComponent', () => {
  let component: AdmissaoComponent;
  let fixture: ComponentFixture<AdmissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
