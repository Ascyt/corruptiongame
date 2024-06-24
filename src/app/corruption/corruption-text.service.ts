import { Injectable } from '@angular/core';
import { NormaldistService } from '../normaldist.service';

@Injectable({
  providedIn: 'root'
})
export class CorruptionTextService {

  constructor(private normaldist:NormaldistService) { }

  public getText(text:string, corruptionLevel: number): string {
    const amount:number = Math.abs(this.normaldist.get() * (corruptionLevel ** 2) / 20.0 * text.length);

    text = this.corrupt(text, amount);

    const lengthChangeAmount:number = Math.floor(this.normaldist.get() * (corruptionLevel ** 2) / 100.0 * text.length + 0.5);

    text = this.changeLength(text, lengthChangeAmount);

    return text;
  }

  private corrupt(text:string, amount:number): string {
    let corruptedText:string = text;
    for (let i = 0; i < amount; i++) {
      const index:number = Math.floor(Math.random() * text.length);
      corruptedText = this.replaceAt(corruptedText, index, this.getCorruptionChar(corruptedText[index - 1], corruptedText[index + 1]));
    }
    return corruptedText;
  }

  private changeLength(text:string, amount:number): string {
    if (amount > 0) {
      for (let i = 0; i < amount; i++) {
        const index:number = Math.floor(Math.random() * text.length);
        text = this.insertAt(text, index, this.getCorruptionChar(text[index - 1], text[index + 1]));
      }
    } else {
      for (let i = 0; i < Math.abs(amount); i++) {
        const index:number = Math.floor(Math.random() * text.length);
        text = this.removeAt(text, index);
      }
    }
    return text;
  }

  private replaceAt(text:string, index:number, replacement:string): string {
    return text.substr(0, index) + replacement + text.substr(index + replacement.length);
  }
  private insertAt(text:string, index:number, replacement:string): string {
    return text.substr(0, index) + replacement + text.substr(index);
  }
  private removeAt(text:string, index:number): string {
    return text.substr(0, index) + text.substr(index + 1);
  }

  private getCorruptionChar(letterBefore:string|undefined, letterAfter:string|undefined): string {
    if (letterBefore === undefined) {
      letterBefore = ' ';
    }
    if (letterAfter === undefined) {
      letterAfter = ' ';
    }

    let spaceMultiplier = 1;
    if (letterBefore === ' ') {
      spaceMultiplier /= 3;
    }
    if (letterAfter === ' ') {
      spaceMultiplier /= 3;
    }

    if (Math.random() < 0.2 * spaceMultiplier) {
        return ' ';
    }

    let vowelMultiplier = 1;
    let consonantMultiplier = 1
    if (this.isVowel(letterBefore)) {
      vowelMultiplier /= 2;
    }
    if (this.isConsonant(letterBefore)) {
      consonantMultiplier /= 2;
    }
    if (this.isVowel(letterAfter)) {
      vowelMultiplier /= 2;
    }
    if (this.isConsonant(letterAfter)) {
      consonantMultiplier /= 2;
    }

    if (this.isVowel(letterBefore) && this.isVowel(letterAfter)) {
      vowelMultiplier /= 2;
    }
    if (this.isConsonant(letterBefore) && this.isConsonant(letterAfter)) {
      consonantMultiplier /= 2;
    }

    const letters: ([string, number])[] = [
        ['a', 8.2 * vowelMultiplier],
        ['b', 1.5 * consonantMultiplier],
        ['c', 2.8 * consonantMultiplier],
        ['d', 4.3 * consonantMultiplier],
        ['e', 12.7 * vowelMultiplier],
        ['f', 2.2 * consonantMultiplier],
        ['g', 2.0 * consonantMultiplier],
        ['h', 6.1 * consonantMultiplier],
        ['i', 7.0 * vowelMultiplier],
        ['j', 0.15 * consonantMultiplier],
        ['k', 0.77 * consonantMultiplier],
        ['l', 4.0 * consonantMultiplier],
        ['m', 2.4 * consonantMultiplier],
        ['n', 6.7 * consonantMultiplier],
        ['o', 7.5 * vowelMultiplier],
        ['p', 1.9 * consonantMultiplier],
        ['q', 0.095 * consonantMultiplier],
        ['r', 6.0 * consonantMultiplier],
        ['s', 6.3 * consonantMultiplier],
        ['t', 9.1 * consonantMultiplier],
        ['u', 2.8 * vowelMultiplier],
        ['v', 0.98 * consonantMultiplier],
        ['w', 2.4 * consonantMultiplier],
        ['x', 0.15 * consonantMultiplier],
        ['y', 2.0 * vowelMultiplier],
        ['z', 0.074 * consonantMultiplier],
    ];

    // Calculate the cumulative distribution
    const cumulativeDistribution: [string, number][] = [];
    let cumulativeSum = 0;

    for (const [char, freq] of letters) {
      cumulativeSum += freq;
      cumulativeDistribution.push([char, cumulativeSum]);
    }

    // Generate a random number between 0 and the total sum of frequencies
    const totalSum = cumulativeSum;
    const randomValue = Math.random() * totalSum;

    // Find the corresponding letter based on the random value
    for (const [char, cumulativeFreq] of cumulativeDistribution) {
        if (randomValue <= cumulativeFreq) {
            return char;
        }
    }

    // Fallback in case of rounding errors
    return ' ';
  }

  private isVowel(letter:string): boolean {
    return 'aeiou'.includes(letter);
  }
  private isConsonant(letter:string): boolean {
    return 'bcdfghjklmnpqrstvwxyz'.includes(letter);
  }
}
