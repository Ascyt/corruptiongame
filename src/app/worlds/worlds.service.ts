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
      materials: [
        { 
          id: 1,
          name: 'stone'
        },
        { 
          id: 2,
          name: 'iron'
        },
        {
          id: 3,
          name: 'gold'
        },
        { 
          id: 4,
          name: 'diamond'
        }
      ],

      pickaxes: [
        {
          id: 1,
          name: null,
          probabilities: [
            { 
              material: 1,
              probability: 1
            }
          ],
          requiredToCraft: null
        },
        {
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
        },        
        {
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
        },
        {
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
        },
        {
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
        }
      ],
      corruptionLevel: 0,
      connectedTo: []
    };
  }
}
