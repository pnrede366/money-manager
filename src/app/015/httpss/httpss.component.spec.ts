import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpssComponent } from './httpss.component';

describe('HttpssComponent', () => {
  let component: HttpssComponent;
  let fixture: ComponentFixture<HttpssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
