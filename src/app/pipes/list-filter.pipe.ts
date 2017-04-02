import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingItem } from '../model/shoping-item';

@Pipe({name: 'listFilter'})
export class ListFilter implements PipeTransform {
  transform(basket: ShoppingItem[], filter: string = 'all') {
    switch (filter) {
      case 'all':
        return basket;
      case 'basket':
        return basket.filter(item => !item.purchased);
      case 'purchased':
        return basket.filter(item => item.purchased);
      default:
        return basket;
    }
  }
}
