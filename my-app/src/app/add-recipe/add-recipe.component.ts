import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      tags: [''],
      image: [''],
      timeCooking: [],
      foodValue: this.fb.group({
        calories: [],
        fats: [],
        carbohydrates: [],
        proteins: []
      }),
      cookingSteps: this.fb.array([this.createCookingStep()]),
      ingredients: this.fb.array([this.createIngredient()])
    });
  }

  get cookingSteps(): FormArray {
    return this.recipeForm.get('cookingSteps') as FormArray;
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  createCookingStep(): FormGroup {
    return this.fb.group({
      title: [''],
      description: ['']
    });
  }

  addCookingStep(): void {
    this.cookingSteps.push(this.createCookingStep());
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      title: [''],
      description: ['']
    });
  }

  addIngredient(): void {
    this.ingredients.push(this.createIngredient());
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      const formValue = this.recipeForm.value;

      const tagsArray = formValue.tags ? formValue.tags.split(',').map((tag: string) => tag.trim()) : [];
      formValue.tags = tagsArray;
      
      this.recipeService.createRecipe(this.recipeForm.value).subscribe({
        next: response => {
          alert('Рецепт успешно создан!');
        },
        error: err => {
          alert('Ошибка при создании рецепта');
        }
      });
    } else {
      alert('Заполните все обязательные поля!!!!!');
    }
  }
}
