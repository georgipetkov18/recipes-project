import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(
            'https://udemy-recipe-book-bb25c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
            recipes).subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(
            'https://udemy-recipe-book-bb25c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                        // if (!recipe.ingredients) {
                        //     recipe.ingredients = [];             
                        // }
                        // return recipe;
                    });
                }),
                tap(recipes => {
                    this.recipeService.updateRecipes(recipes);
                }
            )
        );
    }
}