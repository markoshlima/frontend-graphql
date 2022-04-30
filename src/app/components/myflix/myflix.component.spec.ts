import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyflixComponent } from './myflix.component';

describe('MyflixComponent', () => {
  let component: MyflixComponent;
  let fixture: ComponentFixture<MyflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
