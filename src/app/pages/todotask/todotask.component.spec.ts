import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskComponent } from './todotask.component';

describe('InventoryComponent', () => {
  let component: TodoTaskComponent;
  let fixture: ComponentFixture<TodoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
