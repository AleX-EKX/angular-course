import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
// import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { AccessComponent } from './access/access.component';
import { MainComponent } from './main/main.component';
import { PanelComponent } from './panel/panel.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { UserPageComponent } from './panel/user-page/user-page.component';
import { Gmt3DatePipe } from './gmt3-date.pipe';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeComponent } from './main/recipe/recipe.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { RecipeState } from './recipe/recipe.state';
// import { UserState } from './user.state';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegistrationComponent,
    ErrorComponent,
    AccessComponent,
    MainComponent,
    PanelComponent,
    AddRecipeComponent,
    UserPageComponent,
    Gmt3DatePipe,
    RecipesDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([RecipeState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
