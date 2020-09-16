import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingLayoutComponent } from './sitting-layout.component';

describe('SittingLayoutComponent', () => {
  let component: SittingLayoutComponent;
  let fixture: ComponentFixture<SittingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SittingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SittingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
