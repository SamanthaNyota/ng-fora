import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTopicViewComponent } from './single-topic-view.component';

describe('SingleTopicViewComponent', () => {
  let component: SingleTopicViewComponent;
  let fixture: ComponentFixture<SingleTopicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTopicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTopicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
