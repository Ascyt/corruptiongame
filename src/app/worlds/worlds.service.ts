import { Injectable } from '@angular/core';
import { World } from './world';

@Injectable({
  providedIn: 'root'
})
export class WorldsService {
  public currentWorld:World;

  constructor() { 
    this.currentWorld = {
      name: 'The World',
      materials: [],
      pickaxes: [],
      corruptionLevel: 0,
      connectedTo: []
    };
  }
}
