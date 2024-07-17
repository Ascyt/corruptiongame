import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldSelectorComponent } from './world-selector.component';

describe('WorldSelectorComponent', () => {
  let component: WorldSelectorComponent;
  let fixture: ComponentFixture<WorldSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
