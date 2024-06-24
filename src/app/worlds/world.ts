import { Pickaxe } from "./pickaxe";
import { Material } from "./material";

export interface World {
    name:string,

    materials:Material[],
    pickaxes:Pickaxe[],

    corruptionLevel:number,

    connectedTo:World[],
}
