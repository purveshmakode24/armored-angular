import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthMainLayoutComponent } from './post-auth-main-layout.component';

describe('PostAuthMainLayoutComponent', () => {
  let component: PostAuthMainLayoutComponent;
  let fixture: ComponentFixture<PostAuthMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAuthMainLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAuthMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
