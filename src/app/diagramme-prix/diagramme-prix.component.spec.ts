import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagrammePrixComponent } from './diagramme-prix.component';

describe('DiagrammePrixComponent', () => {
  let component: DiagrammePrixComponent;
  let fixture: ComponentFixture<DiagrammePrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagrammePrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagrammePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
