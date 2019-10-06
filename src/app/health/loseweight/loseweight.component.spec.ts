import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseweightComponent } from './loseweight.component';

describe('LoseweightComponent', () => {
  let component: LoseweightComponent;
  let fixture: ComponentFixture<LoseweightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoseweightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoseweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
