import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiptmentComponent } from './equiptment.component';

describe('EquiptmentComponent', () => {
  let component: EquiptmentComponent;
  let fixture: ComponentFixture<EquiptmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiptmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiptmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
