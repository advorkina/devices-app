import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSwitchComponent } from './power-switch.component';

describe('PowerSwitchComponent', () => {
  let component: PowerSwitchComponent;
  let fixture: ComponentFixture<PowerSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
