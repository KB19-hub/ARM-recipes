import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstipsComponent } from './newstips.component';

describe('NewstipsComponent', () => {
  let component: NewstipsComponent;
  let fixture: ComponentFixture<NewstipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewstipsComponent]
    });
    fixture = TestBed.createComponent(NewstipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
