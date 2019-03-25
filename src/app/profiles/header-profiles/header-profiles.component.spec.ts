import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfilesComponent } from './header-profiles.component';

describe('HeaderProfilesComponent', () => {
  let component: HeaderProfilesComponent;
  let fixture: ComponentFixture<HeaderProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
