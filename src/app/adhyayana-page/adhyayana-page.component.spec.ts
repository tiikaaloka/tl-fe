import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhyayanaPageComponent } from './adhyayana-page.component';

describe('AdhyayanaPageComponent', () => {
  let component: AdhyayanaPageComponent;
  let fixture: ComponentFixture<AdhyayanaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhyayanaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhyayanaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
