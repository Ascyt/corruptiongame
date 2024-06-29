import { Injectable } from '@angular/core';
import { World } from './world';
import { CraftRequirement, Pickaxe } from './pickaxe';

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

  public requirementsMet(requirements:CraftRequirement[]):boolean {
    for (let requirement of requirements) {
      if (this.getWorld(this.getMaterial(requirement.materialId).fromWorldId).materials.find(m => m[0].id === requirement.materialId)![1] < requirement.quantity) {
        return false;
      }
    }
    return true;
  }

  public craftPickaxe(pickaxe:Pickaxe) {
    
  }

  public getWorldTemplate():World {
    return {
      id: 0,
      name: 'The World',
      materials: [
        [{ 
          id: 1,
          name: 'stone',
          fromWorldId: 0
        }, 0],
        [{ 
          id: 2,
          name: 'iron',
          fromWorldId: 0
        }, 0],
        [{
          id: 3,
          name: 'gold',
          fromWorldId: 0
        }, 0],
        [{ 
          id: 4,
          name: 'diamond',
          fromWorldId: 0
        }, 0]
      ],

      pickaxes: [
        [{
          id: 1,
          name: null,
          probabilities: [
            { 
              materialId: 1,
              probability: 1
            }
          ],
          requiredToCraft: null,
          fromWorldId: 0
        }, true],
        [{
          id: 2,
          name: 'stone pickaxe',
          probabilities: [
            { 
              materialId: 1,
              probability: 1
            },
            { 
              materialId: 2,
              probability: 0.5
            }
          ],
          requiredToCraft: [{ 
            materialId: 1,
            quantity: 3
          }],
          fromWorldId: 0
        }, false],        
        [{
          id: 3,
          name: 'iron pickaxe',
          probabilities: [
            { 
              materialId: 1,
              probability: 1
            },
            { 
              materialId: 2,
              probability: 0.5
            },
            { 
              materialId: 3,
              probability: 0.25
            }
          ],
          requiredToCraft: [{ 
            materialId: 2,
            quantity: 3
          }],
          fromWorldId: 0
        }, false],
        [{
          id: 4,
          name: 'gold pickaxe',
          probabilities: [
            { 
              materialId: 1,
              probability: 1
            },
            { 
              materialId: 2,
              probability: 0.5
            },
            { 
              materialId: 3,
              probability: 0.25
            },
            { 
              materialId: 4,
              probability: 0.125
            }
          ],
          requiredToCraft: [{ 
            materialId: 3,
            quantity: 3
          }],
          fromWorldId: 0
        }, false],
        [{
          id: 5,
          name: 'diamond pickaxe',
          probabilities: [
            { 
              materialId: 1,
              probability: 1
            },
            { 
              materialId: 2,
              probability: 1
            },
            { 
              materialId: 3,
              probability: 0.5
            },
            { 
              materialId: 4,
              probability: 0.25
            }
          ],
          requiredToCraft: [{ 
            materialId: 4,
            quantity: 3
          }],
          fromWorldId: 0
        }, false]
      ],
      corruptionLevel: 0,
      connectedTo: []
    };
  }
}
