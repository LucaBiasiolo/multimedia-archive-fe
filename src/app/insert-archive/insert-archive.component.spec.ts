import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertArchiveComponent } from './insert-archive.component';

describe('InsertArchiveComponent', () => {
  let component: InsertArchiveComponent;
  let fixture: ComponentFixture<InsertArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
