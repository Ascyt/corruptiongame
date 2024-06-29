import { Component } from '@angular/core';
import { WorldsService } from '../worlds/worlds.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PickaxeSelectorInterfaceComponent } from './pickaxe-selector-interface/pickaxe-selector-interface.component';

@Component({
  selector: 'app-pickaxe-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pickaxe-selector.component.html',
  styleUrl: './pickaxe-selector.component.scss'
})
export class PickaxeSelectorComponent {
  constructor(public worldsService:WorldsService, private modalService: NgbModal) {
    
  }

  openPickaxeSelector() {
    this.modalService.open(PickaxeSelectorInterfaceComponent);
  }
}
