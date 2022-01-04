import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";


import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { NoRecipeItemComponent } from "./recipe-list/no-recipe-item/no-recipe-item.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        NoRecipeItemComponent,
        RecipeEditComponent
    ],
    imports: [
        RecipesRoutingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class RecipesModule { }