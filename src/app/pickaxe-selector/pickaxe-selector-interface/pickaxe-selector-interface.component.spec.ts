import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickaxeSelectorInterfaceComponent } from './pickaxe-selector-interface.component';

describe('PickaxeSelectorInterfaceComponent', () => {
  let component: PickaxeSelectorInterfaceComponent;
  let fixture: ComponentFixture<PickaxeSelectorInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickaxeSelectorInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickaxeSelectorInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
