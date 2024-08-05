import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Recipe } from './model/recipe.model';

export class AddRecipe {
  static readonly type = '[Recipe] Add';
  constructor(public recipe: Recipe) {}
}

export class RemoveRecipe {
  static readonly type = '[Recipe] Remove';
  constructor(public recipeId: string) {}
}

export class ToggleFavorite {
  static readonly type = '[Recipe] Toggle Favorite';
  constructor(public recipe: Recipe) {}
}

export interface RecipeStateModel {
  recipes: Recipe[];
  favoriteRecipes: string[]; 
}

@State<RecipeStateModel>({
  name: 'recipes',
  defaults: {
    recipes: [],
    favoriteRecipes: []
  }
})
export class RecipeState {
  @Selector()
  static getRecipes(state: RecipeStateModel) {
    return state.recipes;
  }

  @Selector()
  static getFavoriteRecipes(state: RecipeStateModel) {
    return state.favoriteRecipes;
  }

  @Action(AddRecipe)
  add({ getState, patchState }: StateContext<RecipeStateModel>, { recipe }: AddRecipe) {
    const state = getState();
    patchState({
      recipes: [...state.recipes, recipe]
    });
  }

  @Action(RemoveRecipe)
  remove({ getState, patchState }: StateContext<RecipeStateModel>, { recipeId }: RemoveRecipe) {
    const state = getState();
    patchState({
      recipes: state.recipes.filter(r => r.id !== recipeId)
    });
  }

  @Action(ToggleFavorite)
  toggleFavorite({ getState, patchState }: StateContext<RecipeStateModel>, { recipe }: ToggleFavorite) {
    const state = getState();
    const index = state.favoriteRecipes.indexOf(recipe.id);

    if (index === -1) {
      patchState({
        favoriteRecipes: [...state.favoriteRecipes, recipe.id]
      });
    } else {
      const favoriteRecipes = state.favoriteRecipes.filter(id => id !== recipe.id);
      patchState({
        favoriteRecipes
      });
    }
  }
}
