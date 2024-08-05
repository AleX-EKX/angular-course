import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import Swiper from 'swiper';
import { RecipeService } from '../service/recipe.service';
import { IRecipe, Recipe } from '../recipe/model/recipe.model';
import { ToggleFavorite } from '../recipe/recipe.state';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit, OnInit{
  notification: string | null = null;

  mainRecipes: IRecipe[] = [];
  randomRecipes1: Recipe[] = [];
  randomRecipes2: Recipe[] = [];
  showMoreButton: boolean = true;
  constructor(
    private recipeService: RecipeService,
    private store: Store,
    private cdr: ChangeDetectorRef
  )
  { }
  
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.mainRecipes = data.slice(1, 4); 
      this.cdr.detectChanges();
      this.initializeSwiper();
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

  loadMoreRecipes() {
    this.recipeService.getRandomRecipes().subscribe(data => {
      this.randomRecipes1.push(...this.functionRandom(data, 6 - this.randomRecipes1.length));
      if (this.randomRecipes1.length >= 6) {
        this.showMoreButton = false; 
      }
    });
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

  //свайпер
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  swiper!: Swiper;

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }
  initializeSwiper(): void {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      loop: true,
      slidesPerView: 1.2,
      centeredSlides: true,
      spaceBetween: 60,
      autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
      },
      breakpoints: {
        240: {
          slidesPerView: 1.2
        },
        768: {
          slidesPerView: 1.32
        }
      },
    });

    this.swiperContainer.nativeElement.addEventListener('click', (event: MouseEvent) => this.handleSliderClick(event));
  }

  handleSliderClick(event: MouseEvent): void {
    const container = this.swiperContainer.nativeElement;
    const { left, right, width } = container.getBoundingClientRect();
    const clickX = event.clientX;

    if (clickX < left + width / 2) {
      this.swiper.slidePrev();
    } else {
      this.swiper.slideNext(); 
    }
  }


}
