import { Component } from '@angular/core';
import { WorldsService } from '../worlds/worlds.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-worldinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worldinfo.component.html',
  styleUrl: './worldinfo.component.scss'
})
export class WorldinfoComponent {
  constructor (public worldsService:WorldsService) {
    
  }
}
