import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'; 
import { RecipeService } from '../service/recipe.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  users: any[] = [];
  activeTab: string = 'users';
  selectedUserUuid: string | null = null;
  selectedUserName: string | null = null;


  recipes: any[] = []; 
  activeTabr: string = 'recipes'; 
  selectedRecipeId: string | null = null; 
  selectedRecipeName: string = ''; 

  constructor(private authService: AuthService, private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadRecipes();
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  loadUsers(): void {
    this.authService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  openDeleteModal(userUuid: string, userName: string): void {
    this.selectedUserUuid = userUuid;
    this.selectedUserName = userName;
    console.log('Открытие модалки удаления:', this.selectedUserUuid, this.selectedUserName);
  }

  confirmDeleteUser(): void {
    console.log('Попытка удаления польз:', this.selectedUserUuid);
    if (this.selectedUserUuid) {
      this.authService.deleteUser(this.selectedUserUuid).subscribe(() => {
        console.log('польз успешно удален');
        this.loadUsers(); 
      },
      (error) => {
        console.error('Ошибка при удалении пользователя:', error); 
      });
    }
  }

  editUser(id: string): void {
    this.router.navigate([`/panel/users/${id}`]);
  }

  

  loadRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (data) => {
        this.recipes = data;
      },
      (error) => {
        console.error('Ошибка при загрузке рецептов:', error);
      }
    );
  }

  editRecipe(recipeId: string): void {
    this.router.navigate([`/edit-recipe/${recipeId}`]);
  }

  openDeleteRecipeModal(recipeId: string, recipeName: string): void {
    this.selectedRecipeId = recipeId;
    this.selectedRecipeName = recipeName;
  }

  confirmDeleteRecipe(): void {
    if (this.selectedRecipeId) {
      this.recipeService.deleteRecipe(this.selectedRecipeId).subscribe(
        () => {
          console.log("eeeeee");
          
          this.recipes = this.recipes.filter(recipe => recipe.id !== this.selectedRecipeId);
          this.selectedRecipeId = null;
          this.selectedRecipeName = '';
        },
        (error) => {
          console.error('Ошибка при удалении рецепта:', error);
        }
      );
    }
  }


}
