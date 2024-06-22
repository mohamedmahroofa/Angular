import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  fileredList: any = '0';

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
}
