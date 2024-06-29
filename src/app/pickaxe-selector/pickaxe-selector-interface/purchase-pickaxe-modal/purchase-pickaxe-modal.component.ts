import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WorldsService } from '../../../worlds/worlds.service';
import { Pickaxe } from '../../../worlds/pickaxe';

@Component({
  selector: 'app-purchase-pickaxe-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-pickaxe-modal.component.html',
  styleUrl: './purchase-pickaxe-modal.component.scss'
})

export class PurchasePickaxeModalComponent {
  @Input() pickaxe!:Pickaxe;

  public get requirementsMet():boolean {
    return this.worldsService.requirementsMet(this.pickaxe.requiredToCraft!);
  }
  
  constructor(public activeModal:NgbActiveModal, public worldsService:WorldsService) {

  }

  purchasePickaxe() {
    this.worldsService.craftPickaxe(this.pickaxe);
    this.activeModal.close();
  }
}
