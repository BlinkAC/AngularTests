import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowMoviesComponent } from './now-movies.component';

describe('NowMoviesComponent', () => {
  let component: NowMoviesComponent;
  let fixture: ComponentFixture<NowMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
