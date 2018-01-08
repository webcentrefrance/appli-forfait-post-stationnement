import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleDetailComponent } from './ville-detail.component';

describe('VilleDetailComponent', () => {
  let component: VilleDetailComponent;
  let fixture: ComponentFixture<VilleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
