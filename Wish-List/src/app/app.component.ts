import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Lean Angular.'),
    new WishItem('To be a good developer.', true),
    new WishItem('To be a filthy rich.'),
  ];

  filter: any;
}
