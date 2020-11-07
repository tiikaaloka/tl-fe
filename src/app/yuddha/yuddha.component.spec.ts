import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuddhaComponent } from './yuddha.component';

describe('YuddhaComponent', () => {
  let component: YuddhaComponent;
  let fixture: ComponentFixture<YuddhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuddhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YuddhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
