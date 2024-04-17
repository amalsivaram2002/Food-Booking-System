import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestadminComponent } from './westadmin.component';

describe('WestadminComponent', () => {
  let component: WestadminComponent;
  let fixture: ComponentFixture<WestadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WestadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
