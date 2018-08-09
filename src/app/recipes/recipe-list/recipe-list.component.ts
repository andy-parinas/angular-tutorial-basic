import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is test recipe 1', 'http://via.placeholder.com/350x150'),
    new Recipe('Test Recipe 2', 'This is test recipe 2', 'http://via.placeholder.com/350x150'),
    new Recipe('Test Recipe 3', 'This is test recipe 3', 'http://via.placeholder.com/350x150')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
