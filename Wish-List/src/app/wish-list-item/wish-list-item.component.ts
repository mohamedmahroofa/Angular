import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';


@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit{
  @Input() wishText! : string;

  @Input() fulfilled! : boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();
  
  get cssClass() {
    // return this.fulfilled ? ['strikeout' , 'text-muted'] : [];

    return {'strikeout text-muted' : this.fulfilled};
  }
  
  constructor() {}

  ngOnInit(): void {
    
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
