import { Injectable } from '@angular/core';
import { Pastrie } from './pastrie';
import { PASTRIES, INGREDIENTS_LISTS } from './mock-pastries';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  constructor() { }

  getPastries() {
    return PASTRIES.sort((a, b) => a.quantity - b.quantity);
  }

  getPastrie(id: string | undefined) {
    return PASTRIES.find(elem => elem.id === id);
  }

  getPastrieIngredientsList(id: string) {
    return INGREDIENTS_LISTS.find(elem => elem.id === this.getPastrie(id)?.id)?.list || [];
  }

  paginate(start: number, end: number): Array<Pastrie> {
    return PASTRIES.slice(start, end);
  }

  search(word: string) {
    if (word === "") {
      return this.getPastries();
    } else {
      return PASTRIES.filter(p => p.name.toLowerCase().includes(word));
    }
  }
}
