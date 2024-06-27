import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickaxeSelectorComponent } from './pickaxe-selector.component';

describe('PickaxeSelectorComponent', () => {
  let component: PickaxeSelectorComponent;
  let fixture: ComponentFixture<PickaxeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickaxeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickaxeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
