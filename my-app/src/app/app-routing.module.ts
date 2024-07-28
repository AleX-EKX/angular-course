import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { ResolvedResolver } from './resolved.resolver';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'resolved', component: ResolvedComponent, resolve: { post: ResolvedResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
