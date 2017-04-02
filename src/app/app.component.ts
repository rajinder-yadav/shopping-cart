import { Component } from '@angular/core';
import { ShoppingItem } from './model/shoping-item';
import { ListFilter } from './pipes/list-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  basket: ShoppingItem[] = [];
  item: string = '';
  filter: string = 'all';

  onAdd() {
    this.basket.push({id: this.count, name: this.item, count: 1, purchased: false});
    this.item = '';
    ++this.count;
  }

  onRemoveItem(id: number) {
    this.basket = this.basket.filter(v => v.id !== id);
  }

  onPurchased(item: ShoppingItem) {
    this.basket = this.basket.map(v => v.id === item.id ? item : v);
  }
}
