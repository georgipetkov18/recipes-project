import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private addIngredientsSub: Subscription;

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.addIngredientsSub = this.shoppingListService.ingredientsChanged.subscribe(() => {
      this.ingredients = this.shoppingListService.getIngredients();
    });
    this.loggingService.printLog('Shopping list component init');
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
      this.addIngredientsSub.unsubscribe();
  }
}
