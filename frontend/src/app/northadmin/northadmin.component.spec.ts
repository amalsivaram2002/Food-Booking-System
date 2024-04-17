import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthadminComponent } from './northadmin.component';

describe('NorthadminComponent', () => {
  let component: NorthadminComponent;
  let fixture: ComponentFixture<NorthadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
