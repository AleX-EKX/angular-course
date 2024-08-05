import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToggleFavorite } from '../../recipe/recipe.state';
import { Recipe,IRecipe, RecipeItem } from '../../recipe/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe!: RecipeItem;
  steps: any[] = [];
  items: any[] = [];
  notification: string | null = null;

  mainRecipe:  IRecipe[] = [];
  randomRecipes1: Recipe[] = [];
  randomRecipes2: Recipe[] = [];
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private store: Store
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.recipeService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe;
      this.steps = recipe.cookingSteps;
      this.items = recipe.ingredients;
    });
    
    this.recipeService.getRecipes().subscribe(data => {
      this.mainRecipe = data.slice(1, 4); 
    });
    this.fetchRandomRecipes();
    this.fetchRandomRecipes2()
  }
  private functionRandom(recipes: Recipe[], count: number): Recipe[] {
    let shuffled = recipes.slice(0);
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }
  fetchRandomRecipes() {
    this.recipeService.getRandomRecipes().subscribe(data => {
      this.randomRecipes1 = this.functionRandom(data, 3);
    });
  }

  fetchRandomRecipes2() {
    this.recipeService.getRandomRecipes().subscribe(data => {
      this.randomRecipes2 = this.functionRandom(data, 4);
    });
  }

  toggle(index: number) {
    this.items[index].isChecked = !this.items[index].isChecked;
  }

  toggleStep(index: number) {
    this.steps[index].isChecked = !this.steps[index].isChecked;
  }

  isFavorite(recipeId: string): boolean {
    return this.store.selectSnapshot(state => state.recipes.favoriteRecipes.includes(recipeId));
  }
  toggleFavorite(recipe: Recipe) {
    this.store.dispatch(new ToggleFavorite(recipe));
    // Уведомление
    this.showNotification(this.isFavorite(recipe.id) ? 'Добавлено в избранное' : 'Удалено из избранного');
  }

  private showNotification(message: string) {
    this.notification = message;
    setTimeout(() => {
      this.notification = null;
    }, 5000); 
  }
  printPage() {
    window.print();
  }
  
}
