import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefautlLoginLayoutComponent } from './defautl-login-layout.component';

describe('DefautlLoginLayoutComponent', () => {
  let component: DefautlLoginLayoutComponent;
  let fixture: ComponentFixture<DefautlLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefautlLoginLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefautlLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
