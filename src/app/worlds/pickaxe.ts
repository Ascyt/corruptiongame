import { Material } from "./material";

export interface Pickaxe {
    id:number;
    name:string|null;
    probabilities:MineProbability[];
    requiredToCraft:CraftRequirement[]|null;
}

export interface MineProbability {
    material:number;
    probability:number;
}

export interface CraftRequirement {
    material:number;
    quantity:number;
}