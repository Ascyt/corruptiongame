import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorldinfoComponent } from '../worldinfo/worldinfo.component';
import { WorldlistComponent } from '../worldlist/worldlist.component';
import { PickaxeSelectorComponent } from '../pickaxe-selector/pickaxe-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgbModule, WorldinfoComponent, WorldlistComponent, PickaxeSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public onClick(): void {
    alert('You clicked the button!');
  }
}
