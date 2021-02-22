import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArchiveComponent } from './create-archive.component';

describe('CreateArchiveComponent', () => {
  let component: CreateArchiveComponent;
  let fixture: ComponentFixture<CreateArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
