import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribCardsComponent } from './crib-cards.component';

describe('CribCardsComponent', () => {
  let component: CribCardsComponent;
  let fixture: ComponentFixture<CribCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
