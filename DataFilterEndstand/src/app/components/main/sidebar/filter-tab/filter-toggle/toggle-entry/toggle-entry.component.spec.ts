import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ToggleEntryComponent} from './toggle-entry.component';

describe('ToggleEntryComponent', () => {
  let component: ToggleEntryComponent;
  let fixture: ComponentFixture<ToggleEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleEntryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
