import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerFirstComponent } from './eager-first.component';

describe('EagerFirstComponent', () => {
  let component: EagerFirstComponent;
  let fixture: ComponentFixture<EagerFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
