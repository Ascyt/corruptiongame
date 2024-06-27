import { Component } from '@angular/core';
import { WorldsService } from '../worlds/worlds.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pickaxe-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pickaxe-selector.component.html',
  styleUrl: './pickaxe-selector.component.scss'
})
export class PickaxeSelectorComponent {
  constructor(public worldsService:WorldsService) {
    
  }
}
