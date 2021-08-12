import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmoneymangerComponent } from './taskmoneymanger.component';

describe('TaskmoneymangerComponent', () => {
  let component: TaskmoneymangerComponent;
  let fixture: ComponentFixture<TaskmoneymangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskmoneymangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmoneymangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
