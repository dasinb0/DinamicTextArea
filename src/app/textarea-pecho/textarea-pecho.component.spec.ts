import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaPechoComponent } from './textarea-pecho.component';

describe('TextareaPechoComponent', () => {
  let component: TextareaPechoComponent;
  let fixture: ComponentFixture<TextareaPechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaPechoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaPechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
