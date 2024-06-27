import { Injectable } from '@angular/core';
import { World } from './world';
import { Pickaxe } from './pickaxe';

@Injectable({
  providedIn: 'root'
})
export class WorldsService {
  public currentWorld:World;
  public startWorld:World;
  public worlds:World[] = [];
  public selectedPickaxe:Pickaxe;

  constructor() { 
    this.startWorld = this.getWorldTemplate();
    this.currentWorld = this.startWorld;
    this.worlds.push(this.startWorld);

    this.selectedPickaxe = this.currentWorld.pickaxes.find(p => p[1] === true)![0];
  }

  public getWorld(id:number):World {
    return this.worlds.find(w => w.id === id)!;
  }
  public getMaterial(id:number):any {
    return this.currentWorld.materials.find(m => m[0].id === id)![0];
  }
  public getPickaxe(id:number):any {
    return this.currentWorld.pickaxes.find(p => p[0].id === id)![0];
  }

  public getWorldTemplate():World {
    return {
      id: 0,
      name: 'The World',
      materials: [
        [{ 
          id: 1,
          name: 'stone'
        }, 0],
        [{ 
          id: 2,
          name: 'iron'
        }, 0],
        [{
          id: 3,
          name: 'gold'
        }, 0],
        [{ 
          id: 4,
          name: 'diamond'
        }, 0]
      ],

      pickaxes: [
        [{
          id: 1,
          name: null,
          probabilities: [
            { 
              material: 1,
              probability: 1
            }
          ],
          requiredToCraft: null
        }, true],
        [{
          id: 2,
          name: 'stone pickaxe',
          probabilities: [
            { 
              material: 1,
              probability: 1
            },
            { 
              material: 2,
              probability: 0.5
            }
          ],
          requiredToCraft: [{ 
            material: 1,
            quantity: 3
          }]
        }, false],        
        [{
          id: 3,
          name: 'iron pickaxe',
          probabilities: [
            { 
              material: 1,
              probability: 1
            },
            { 
              material: 2,
              probability: 0.5
            },
            { 
              material: 3,
              probability: 0.25
            }
          ],
          requiredToCraft: [{ 
            material: 2,
            quantity: 3
          }]
        }, false],
        [{
          id: 4,
          name: 'gold pickaxe',
          probabilities: [
            { 
              material: 1,
              probability: 1
            },
            { 
              material: 2,
              probability: 0.5
            },
            { 
              material: 3,
              probability: 0.25
            },
            { 
              material: 4,
              probability: 0.125
            }
          ],
          requiredToCraft: [{ 
            material: 3,
            quantity: 3
          }]
        }, false],
        [{
          id: 5,
          name: 'diamond pickaxe',
          probabilities: [
            { 
              material: 1,
              probability: 1
            },
            { 
              material: 2,
              probability: 1
            },
            { 
              material: 3,
              probability: 0.5
            },
            { 
              material: 4,
              probability: 0.25
            }
          ],
          requiredToCraft: [{ 
            material: 4,
            quantity: 3
          }]
        }, false]
      ],
      corruptionLevel: 0,
      connectedTo: []
    };
  }
}
