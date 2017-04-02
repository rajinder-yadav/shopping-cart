import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ShoppingItem } from '../model/shoping-item';

@Component({
  selector: 'item',
  template: `
  <button (click)='onRemove()' class='mr4 br3 ph2 bg-lightest-blue dark-red b--dark-red'>Remove</button>
  <span class='fl w-50'>{{item.name}}</span>
  <span class='pr3'>{{item.count}}</span>
  <button (click)='onInc()' class='br3 mr2'>+</button>
  <button (click)='onDec()' class='br3'>-</button>
  <input type='checkbox' [id]='item.id' [checked]='item.purchased' (click)='onTogglePurchased()' class='ml3'/>
  <label [for]='item.id'>Purchased</label>
  `,
  styles: [`
    :host {
      display: flex;
      width: 30em;
    }
    .pad {
      flex-grow: 1;
    }
  `]
})
export class ItemComponent implements OnInit {

  @Input() item: ShoppingItem;

  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onInc() {
    this.item.count += 1;
  }

  onDec() {
    if(this.item.count > 1) {
      this.item.count -= 1;
    }
  }

  onTogglePurchased() {
    this.item.purchased = ! this.item.purchased;
  }

  onRemove() {
    this.remove.emit(this.item.id);
  }
}
