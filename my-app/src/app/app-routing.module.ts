import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';
import { PanelComponent } from './panel/panel.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserPageComponent } from './panel/user-page/user-page.component';
import { RecipeComponent } from './main/recipe/recipe.component';
import { AccessComponent } from './access/access.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  },
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'panel', 
    component: PanelComponent, 
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'add-recipe', 
    component: AddRecipeComponent, 
    canActivate: [AuthGuard],
    data: { role: 'registered' } 
  },
  {
    path: 'panel/users/:id',
    component: UserPageComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'access',
    component: AccessComponent
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
