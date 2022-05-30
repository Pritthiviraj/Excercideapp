import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinComponentComponent } from './coin-component.component';

describe('CoinComponentComponent', () => {
  let component: CoinComponentComponent;
  let fixture: ComponentFixture<CoinComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
