import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorldsService } from '../../worlds/worlds.service';
import { PurchasePickaxeModalComponent } from './purchase-pickaxe-modal/purchase-pickaxe-modal.component';
import { Pickaxe } from '../../worlds/pickaxe';

@Component({
  selector: 'app-pickaxe-selector-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pickaxe-selector-interface.component.html',
  styleUrl: './pickaxe-selector-interface.component.scss'
})
export class PickaxeSelectorInterfaceComponent {
  constructor(public activeModal:NgbActiveModal, public worldsService:WorldsService, private modalService:NgbModal) {

  }

  selectPickaxe(pickaxe:any) {
    this.worldsService.setSelectedPickaxe(pickaxe);
    this.activeModal.close();
  }
  
  openPurchasePickaxeModal(pickaxe:Pickaxe) {
    const modalRef = this.modalService.open(PurchasePickaxeModalComponent);
    modalRef.componentInstance.pickaxe = pickaxe;
  }
}
