import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Test Recipe 1',
          'This is test recipe 1',
          'http://via.placeholder.com/350x150',
          [
            new Ingredient('Apple', 3),
            new Ingredient('Banana', 3),
          ]),
        new Recipe(
          'Test Recipe 2',
          'This is test recipe 2',
          'http://via.placeholder.com/350x150',
          [
            new Ingredient('Orange', 5),
            new Ingredient('Strwberry', 4),
          ]),
        new Recipe(
          'Test Recipe 3',
          'This is test recipe 3',
          'http://via.placeholder.com/350x150',
          [
            new Ingredient('Melon', 2),
            new Ingredient('Grapes', 8),
          ])
      ];


    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }


}
