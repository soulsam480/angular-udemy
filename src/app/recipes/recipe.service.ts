import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('Test', 'test', 'http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
    new Recipe('Test', 'test', 'http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
    new Recipe('Test', 'test', 'http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
    new Recipe('Test', 'test', 'http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
    new Recipe('Test', 'test', 'http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),

  ];
  getRecipes(){
    return this.recipes.slice();
  }
}
