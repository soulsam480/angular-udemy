import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('name') name: ElementRef;
 @ViewChild('amount') amount: ElementRef;
 

 constructor( private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppinglistService.addIngredient(newIngredient)
  }
}
