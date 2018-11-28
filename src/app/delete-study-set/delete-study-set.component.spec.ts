import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudySetComponent } from './delete-study-set.component';

describe('DeleteStudySetComponent', () => {
  let component: DeleteStudySetComponent;
  let fixture: ComponentFixture<DeleteStudySetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStudySetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudySetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
