import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusuarioComponent } from './viewusuario.component';

describe('ViewusuarioComponent', () => {
  let component: ViewusuarioComponent;
  let fixture: ComponentFixture<ViewusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
