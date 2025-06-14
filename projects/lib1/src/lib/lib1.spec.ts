import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1 } from './lib1';

describe('Lib1', () => {
  let component: Lib1;
  let fixture: ComponentFixture<Lib1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lib1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
