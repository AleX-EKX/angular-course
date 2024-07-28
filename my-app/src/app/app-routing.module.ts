import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostProfileComponent } from './post-profile/post-profile.component';


const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'users',
    component: PostListComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: PostProfileComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
