import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTweetsComponent } from './ng-tweets.component';

describe('NgTweetsComponent', () => {
  let component: NgTweetsComponent;
  let fixture: ComponentFixture<NgTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
