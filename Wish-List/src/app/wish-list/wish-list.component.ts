import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {
  @Input() wishes : WishItem[] = [];
  constructor() {}

  ngOnInit(): void {
    
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
