import { Pickaxe } from "./pickaxe";
import { Material } from "./material";

export interface World {
    id:number,
    name:string,

    materials:[Material, number][], // [Material, amount]
    pickaxes:[Pickaxe, boolean][], // [Pickaxe, isOwned]

    corruptionLevel:number,

    connectedTo:World[],
}
