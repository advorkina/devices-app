import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerUsageChartComponent } from './power-usage-chart.component';

describe('PowerUsageChartComponent', () => {
  let component: PowerUsageChartComponent;
  let fixture: ComponentFixture<PowerUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerUsageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
