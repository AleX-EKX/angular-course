import { Injectable } from '@angular/core';
import { Recipe, RecipeItem } from '../recipe/model/recipe.model';
import { AddRecipe, ToggleFavorite } from '../recipe/recipe.state';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

interface IAuthor {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  middleName: string;
}

interface IRecipe {
  id: string;
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number;
  author: IAuthor;
  createdOn: string;
  updatedOn: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://evo-academy.wckz.dev/api/cooking-blog';

  constructor(private http: HttpClient, private store: Store) {}

  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  createRecipe(recipeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/create`, recipeData, { headers: this.getAuthHeaders() });
  }

  getRecipeById(id: string): Observable<RecipeItem> {
    return this.http.get<RecipeItem>(`${this.apiUrl}/posts/${id}`);
  }

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${this.apiUrl}/posts`);
  }

  getRandomRecipes(): Observable<Recipe[]> {
    return this.http.get<IRecipe[]>(`${this.apiUrl}/posts`).pipe(
      map(recipes => recipes.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        timeCooking: recipe.timeCooking,
        tags: recipe.tags
      })))
    );
  }

  deleteRecipe(recipeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${recipeId}`, { headers: this.getAuthHeaders() });
  }

  addToFavorites(recipe: Recipe): void {
    this.store.dispatch(new ToggleFavorite(recipe));
  }

  isFavorite(recipeId: string): boolean {
    const favoriteRecipes = this.store.selectSnapshot<string[]>(state => state.recipes.favoriteRecipes);
    return favoriteRecipes.includes(recipeId);
  }
}
