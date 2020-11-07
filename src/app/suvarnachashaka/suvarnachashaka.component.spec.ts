import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvarnachashakaComponent } from './suvarnachashaka.component';

describe('SuvarnachashakaComponent', () => {
  let component: SuvarnachashakaComponent;
  let fixture: ComponentFixture<SuvarnachashakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuvarnachashakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvarnachashakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
