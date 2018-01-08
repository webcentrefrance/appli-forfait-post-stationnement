import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleAutocompleteComponent } from './ville-autocomplete.component';

describe('VilleAutocompleteComponent', () => {
  let component: VilleAutocompleteComponent;
  let fixture: ComponentFixture<VilleAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
