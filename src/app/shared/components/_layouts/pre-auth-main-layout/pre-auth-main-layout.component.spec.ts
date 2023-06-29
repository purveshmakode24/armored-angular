import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuthMainLayoutComponent } from './pre-auth-main-layout.component';

describe('PreAuthMainLayoutComponent', () => {
  let component: PreAuthMainLayoutComponent;
  let fixture: ComponentFixture<PreAuthMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAuthMainLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreAuthMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
