import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'This is test recipe 1', 'http://via.placeholder.com/350x150'),
        new Recipe('Test Recipe 2', 'This is test recipe 2', 'http://via.placeholder.com/350x150'),
        new Recipe('Test Recipe 3', 'This is test recipe 3', 'http://via.placeholder.com/350x150')
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }


}