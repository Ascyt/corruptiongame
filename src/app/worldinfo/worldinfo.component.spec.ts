import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldlistComponent } from './worldinfo.component';

describe('WorldlistComponent', () => {
  let component: WorldlistComponent;
  let fixture: ComponentFixture<WorldlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
