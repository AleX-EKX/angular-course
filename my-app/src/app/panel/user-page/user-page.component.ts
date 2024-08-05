import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: any = null; 
  userRecipes: any[] = []; 
  totalRecipes: number = 0; 
  totalComments: number = 0; 
  selectedUserId: string | null = null; 

  constructor(
    private route: ActivatedRoute,
    private userService: AuthService,
    private recipeService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedUserId = params.get('id');
      if (this.selectedUserId) {
        this.loadUserData(this.selectedUserId);
        this.loadUserRecipes(this.selectedUserId);
      }
    });
  }

  loadUserData(userId: string): void {
    this.userService.getUserById(userId).subscribe(
      (data) => {
        this.user = data;
        this.totalComments = this.user.comments.length; 
      },
      (error) => {
        console.error('Ошибка загр данных пользователя:', error);
      }
    );
  }

  loadUserRecipes(userId: string): void {
    this.recipeService.getUserRecipes(userId).subscribe(
      (data) => {
        this.userRecipes = data;
        this.totalRecipes = data.length;
      },
      (error) => {
        console.error('Ошибка рецептов пользователя:', error);
      }
    );
  }

  deleteUser(): void {
    if (this.selectedUserId) {
      this.userService.deleteUser(this.selectedUserId).subscribe(
        () => {
          
        },
        (error) => {
          console.error('Ошибка удалении польз:', error);
        }
      );
    }
  }
}
