import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorldsService } from '../worlds/worlds.service';

@Component({
  selector: 'app-worldlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worldlist.component.html',
  styleUrl: './worldlist.component.scss'
})
export class WorldlistComponent {
  constructor(public worldsService:WorldsService) {

  }
}
