import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamayanaComponent } from './ramayana.component';

describe('RamayanaComponent', () => {
  let component: RamayanaComponent;
  let fixture: ComponentFixture<RamayanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamayanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamayanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
