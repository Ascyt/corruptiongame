import { Injectable } from '@angular/core';
import { World } from './world';
import { CraftRequirement, MineProbability, Pickaxe } from './pickaxe';
import { Material } from './material';

@Injectable({
  providedIn: 'root'
})
export class WorldsService {
  private currentWorldId:number;
  public startWorld:World;
  public worlds:World[] = [];
  private selectedPickaxeId:[number, number]; // [worldId, pickaxeId]

  constructor() { 
    this.startWorld = this.getWorldTemplate();
    this.currentWorldId = this.startWorld.id;
    this.worlds.push(this.startWorld);

    this.selectedPickaxeId = [this.getCurrentWorld().id, this.getCurrentWorld().pickaxes.find(p => p[1] === true)![0].id]; 

    this.loadData();
    this.saveData();
  }

  public saveData():void {
    localStorage.setItem('worlds', JSON.stringify(this.worlds));
    localStorage.setItem('currentWorldId', JSON.stringify(this.currentWorldId));
    localStorage.setItem('selectedPickaxeId', JSON.stringify(this.selectedPickaxeId));
  }
  public loadData():void {
    const worlds:string|null = localStorage.getItem('worlds');
    if (!worlds || worlds.length === 0) {
      return;
    }
    const currentWorldId:string|null = localStorage.getItem('currentWorldId');
    if (!currentWorldId || currentWorldId.length === 0) {
      return;
    }
    const selectedPickaxeId:string|null = localStorage.getItem('selectedPickaxeId');
    if (!selectedPickaxeId || selectedPickaxeId.length === 0) {
      return;
    }

    this.worlds = JSON.parse(worlds);
    this.currentWorldId = JSON.parse(currentWorldId);
    this.selectedPickaxeId = JSON.parse(selectedPickaxeId);
  }
  public getJson():string {
    return JSON.stringify({
      worlds: this.worlds,
      currentWorldId: this.currentWorldId,
      selectedPickaxeId: this.selectedPickaxeId
    });
  }
  public loadJson(json:string):void {
    const data = JSON.parse(json);
    this.worlds = data.worlds;
    this.currentWorldId = data.currentWorldId;
    this.selectedPickaxeId = data.selectedPickaxeId;
  }

  public getWorld(id:number):World {
    return this.worlds.find(w => w.id === id)!;
  }
  public getCurrentWorld():World {
    return this.getWorld(this.currentWorldId);
  }
  public getMaterial(id:number):Material {
    return this.getCurrentWorld().materials.find(m => m[0].id === id)![0];
  }
  public getPickaxe(id:number):Pickaxe {
    return this.getCurrentWorld().pickaxes.find(p => p[0].id === id)![0];
  }
  public getSelectedPickaxe():Pickaxe {
    return this.getWorld(this.selectedPickaxeId[0]).pickaxes.find(p => p[0].id === this.selectedPickaxeId[1])![0];
  }

  public mineWithCurrentPickaxe():Material {
    const cumulativeDistribution: [Material, number][] = this.getCumulativeDistribution(this.getSelectedPickaxe().probabilities!);

    // Generate a random number between 0 and the total sum of frequencies
    const randomValue = Math.random();

    // Find the corresponding letter based on the random value
    for (const [material, cumulativeFreq] of cumulativeDistribution) {
        if (randomValue <= cumulativeFreq) {
          this.getCurrentWorld().materials.find(m => m[0].id === material.id)![1]++;

          this.saveData();

          return material;
        }
    }

    return this.mineWithCurrentPickaxe(); // If a material is not found, try again
  }
  public getCumulativeDistribution(probabilities:MineProbability[]):[Material, number][] {
    const cumulativeDistribution: [Material, number][] = [];
    let cumulativeSum = 0;

    // Sum the probabilities
    for (const probability of probabilities) {
      cumulativeSum += probability.probability;
      cumulativeDistribution.push([this.getMaterial(probability.materialId), cumulativeSum]);
    }

    // Normalize the probabilities
    for (let i = 0; i < cumulativeDistribution.length; i++) {
      cumulativeDistribution[i][1] /= cumulativeSum;
    }

    return cumulativeDistribution;
  }
  public getNormalizedProbabilities(probabilities:MineProbability[]):[Material, number][] {
    const normalizedProbabilities: [Material, number][] = [];
    let sum = 0;

    // Sum the probabilities
    for (const probability of probabilities) {
      sum += probability.probability;
    }

    // Normalize the probabilities
    for (const probability of probabilities) {
      normalizedProbabilities.push([this.getMaterial(probability.materialId), probability.probability / sum]);
    }

    return normalizedProbabilities;
  }

  public requirementsMet(requirements:CraftRequirement[]):boolean {
    for (let requirement of requirements) {
      const material = this.getWorld(this.getMaterial(requirement.materialId).fromWorldId)
      .materials.find(m => m[0].id === requirement.materialId);
      console.log(material);

      if (material![1] < requirement.quantity) {
        return false;
      }
    }
    return true;
  }

  public craftPickaxe(pickaxe:Pickaxe) {
    if (!this.requirementsMet(pickaxe.requiredToCraft!)) {
      return;
    }
    
    for (let requirement of pickaxe.requiredToCraft!) {
      this.getWorld(this.getMaterial(requirement.materialId).fromWorldId).materials.find(m => m[0].id === requirement.materialId)![1] -= requirement.quantity;
    }
    this.getCurrentWorld().pickaxes.find(p => p[0].id === pickaxe.id)![1] = true;
    this.saveData();
  }
  
  public setSelectedPickaxe(pickaxe:Pickaxe) {
    this.selectedPickaxeId = [pickaxe.fromWorldId, pickaxe.id];
    this.saveData();
  }
  public setWorld(world:World) {
    this.currentWorldId = world.id;
    this.saveData();
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
              probability: 0.5
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
