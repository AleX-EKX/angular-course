export interface Recipe {
    id: string;
    title: string;
    tags: string[];
    image: string;
    timeCooking: number;
}
export interface FoodValue {
  calories: number;
  fats: number;
  carbohydrates: number;
  proteins: number;
}

export interface CookingStep {
  title: string;
  description: string;
}

export interface Ingredient {
  title: string;
  description: string;
}

export interface Author {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface Comment {
  id: string;
  postId: string;
  user: {
    firstName: string;
    lastName: string;
  };
  text: string;
  createdOn: string;
  updatedOn: string;
}
export interface RecipeItem {
  id: string;
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number;
  foodValue: FoodValue;
  cookingSteps: CookingStep[];
  ingredients: Ingredient[];
  author: Author;
  comments: Comment[];
  createdOn: string;
  updatedOn: string;
}

export interface IRecipe {
  id: string;
  body?: string;
  title: string;
  tags: string[];
  image?: string;
  timeCooking?: number;
  author: {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
    middleName: string;
  };
  createdOn: string;
  updatedOn: string;
}