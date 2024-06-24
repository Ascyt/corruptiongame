import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CorruptionTextService } from '../corruption/corruption-text.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  constructor (private corruptionText:CorruptionTextService) {}

  getText(corruptionLevel: number): string {
    const text:string = 'never gonna give you up';
1
    return this.corruptionText.getText(text, corruptionLevel);
  }
}
