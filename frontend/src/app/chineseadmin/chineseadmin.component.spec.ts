import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseadminComponent } from './chineseadmin.component';

describe('ChineseadminComponent', () => {
  let component: ChineseadminComponent;
  let fixture: ComponentFixture<ChineseadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChineseadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChineseadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
