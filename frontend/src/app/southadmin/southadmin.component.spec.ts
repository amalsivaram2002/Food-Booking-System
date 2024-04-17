import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthadminComponent } from './southadmin.component';

describe('SouthadminComponent', () => {
  let component: SouthadminComponent;
  let fixture: ComponentFixture<SouthadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
