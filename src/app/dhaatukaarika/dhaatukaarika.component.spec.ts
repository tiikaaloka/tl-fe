import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhaatukaarikaComponent } from './dhaatukaarika.component';

describe('DhaatukaarikaComponent', () => {
  let component: DhaatukaarikaComponent;
  let fixture: ComponentFixture<DhaatukaarikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhaatukaarikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhaatukaarikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
