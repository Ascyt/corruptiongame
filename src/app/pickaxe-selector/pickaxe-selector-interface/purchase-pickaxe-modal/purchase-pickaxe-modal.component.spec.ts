import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePickaxeModalComponent } from './purchase-pickaxe-modal.component';

describe('PurchasePickaxeModalComponent', () => {
  let component: PurchasePickaxeModalComponent;
  let fixture: ComponentFixture<PurchasePickaxeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasePickaxeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchasePickaxeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
