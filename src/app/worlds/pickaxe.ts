import { Material } from "./material";
import { World } from "./world";

export interface Pickaxe {
    id:number;
    name:string|null;
    probabilities:MineProbability[];
    requiredToCraft:CraftRequirement[]|null;
    fromWorldId:number;
}

export interface MineProbability {
    materialId:number;
    probability:number;
}

export interface CraftRequirement {
    materialId:number;
    quantity:number;
}