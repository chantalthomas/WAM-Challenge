import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudySetComponent } from './create-study-set.component';

describe('CreateStudySetComponent', () => {
  let component: CreateStudySetComponent;
  let fixture: ComponentFixture<CreateStudySetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudySetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudySetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
