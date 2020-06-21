import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test','test','http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
    new Recipe('Test','test','http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
    new Recipe('Test','test','http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
    new Recipe('Test','test','http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
    new Recipe('Test','test','http://drive.google.com/uc?export=view&id=1pa8kJANh9iQcZMA_WefgZHPmXlVjw-Pf'),
   
  ];

  @Output() recipeWasSelected =  new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(
  recipe
)
  }
}
