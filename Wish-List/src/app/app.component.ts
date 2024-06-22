import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
import { concatWith } from 'rxjs';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

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

  fileredList: any = '0';

  title = 'Wish-List';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.fileredList]);
  }
}
