import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>() ;
  private ingredients: Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('tomato',4),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(
      this.ingredients.slice()
    );
  }

}
