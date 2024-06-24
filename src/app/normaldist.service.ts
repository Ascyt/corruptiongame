import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormaldistService {

  constructor() { }


  public get(mean: number = 0, stdDev: number = 1): number {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converting [0,1[ to ]0,1[
    while (v === 0) v = Math.random();
    const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return num * stdDev + mean;
  }
}
