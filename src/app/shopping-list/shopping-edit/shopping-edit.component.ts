import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('name') name: ElementRef;
 @ViewChild('amount') amount: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>()

 constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(
      newIngredient
    )
  }
}
