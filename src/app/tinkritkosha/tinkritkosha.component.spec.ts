import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinkritkoshaComponent } from './tinkritkosha.component';

describe('TinkritkoshaComponent', () => {
  let component: TinkritkoshaComponent;
  let fixture: ComponentFixture<TinkritkoshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinkritkoshaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinkritkoshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
