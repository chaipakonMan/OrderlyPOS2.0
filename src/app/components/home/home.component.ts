import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FoodCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods = [
    { name: 'Fried Tofu', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: "" },
    { name: 'Egg Rolls', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: "" },
    { name: 'Pork Egg Rolls', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: "" },
    { name: 'Fried Shrimp Rolls', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: "" },
    { name: 'Fried Wonton', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: "" },
    { name: 'Fried Shrimp', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: "" },
    { name: 'Fried Calamari', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: "" },
    { name: 'Fried Fish Cake', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: "" },
    { name: 'Satay', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: "" },
    { name: 'Pan Fried Dumplings', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: "" },
    { name: 'Boiled Dumplings', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: "" },
    { name: 'Isaan Sausage', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: "" },
    { name: 'Steamed Shrimp Wontons', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: "" },
    { name: 'Spring Roll Wrapped', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: "" },
    { name: 'Combo Appetizers', selected: false, category: 'Appetizer', price: 15.99, quantity: 1, comment: "" },
    { name: 'Fried Pork Leg', selected: false, category: 'Appetizer', price: 18.99, quantity: 1, comment: "" },
    { name: 'Thai Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: "" },
    { name: 'Papaya Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: "" },
    { name: 'Crispy Duck', selected: false, category: 'Salad', price: 18.95, quantity: 1, comment: "" },
    { name: 'Yum Woon Sen', selected: false, category: 'Salad', price: 12.99, quantity: 1, comment: "" },
    { name: 'Larb', selected: false, category: 'Salad', price: 12, quantity: 1, comment: "" },
    { name: 'Grilled Beef Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: "" },
    { name: 'Beef Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: "" },
    { name: 'Seafood Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: "" },
    { name: 'Naked Shrimp', selected: false, category: 'Salad', price: 15, quantity: 1, comment: "" },
    { name: 'Lemon Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: "" },
    { name: 'Lemon Grass Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: "" },
    { name: 'Three Crispy Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: "" },
    { name: 'Fish Salads', selected: false, category: 'Salad', price: 19.95, quantity: 1, comment: "" },
    { name: 'Nam Tok', selected: false, category: 'Salad', price: 12, quantity: 1, comment: "" },
    { name: 'Wonton Soup Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: "" },
    { name: 'Wonton Soup Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Bean Thread Noodle Soup Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: "" },
    { name: 'Bean Thread Noodle Soup Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Tom Yum Chicken Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: "" },
    { name: 'Tom Yum Chicken Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Tom Yum Shrimp Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Tom Yum Shrimp Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Tom Kha Chicken Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: "" },
    { name: 'Tom Kha Chicken Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Tom Kha Shrimp Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Tom Kha Shrimp Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Seafood Soup Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Seafood Soup Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Hot Pot Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Hot Pot Seafood/Combo Bowl', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Hot Pot Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: "" },
    { name: 'Hot Pot Seafood/Combo Hot Pot', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: "" },
    { name: 'Thai Herbs Soup “Joom Zab” Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Thai Herbs Soup “Joom Zab” Bowl Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Thai Herbs Soup “Joom Zab” Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: "" },
    { name: 'Thai Herbs Soup “Joom Zab” Hot Pot Seafood/Combo', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: "" },
    { name: 'Special Curry Mix Sauce (No Coconut Milk)', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Special Curry Mix Sauce (No Coconut Milk) Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Mix Vegetable Sour Soup “Kang Som” Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Mix Vegetable Sour Soup “Kang Som” Bowl Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Mix Vegetable Sour Soup “Kang Som” Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: "" },
    { name: 'Mix Vegetable Sour Soup “Kang Som” Hot Pot Seafood/Combo', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: "" },
    { name: 'Nang Lee', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Nang Lee Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Red Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Red Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Green Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Green Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Duck Curry', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Panang', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Panang Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Massamon Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: "" },
    { name: 'Massamon Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: "" },
    { name: 'Thai House Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Thai House Fried Rice Shrimp', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: "" },
    { name: 'Pineapple Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Pineapple Fried Rice Shrimp', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: "" },
    { name: 'Thai Sausage Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Crab Fried Rice', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: "" },
    { name: 'Red Fried Rice', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: "" },
    { name: 'Chicken Over Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: "" },
    { name: 'Fried Chicken Over Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: "" },
    { name: 'BBQ Pork Over Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: "" },
    { name: 'Roasted Duck Over Rice', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: "" },
    { name: 'Thai Stewed Pork Hock (Khao Ka Moo)', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: "" },
    { name: 'Three Combinations Over Rice', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: "" },
    { name: 'Fried Garlic & Pepper Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Fried Garlic & Pepper Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: "" },
    { name: 'Pad Prik Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Pad Prik Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: "" },
    { name: 'Pad Prik King Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Pad Prik King Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: "" },
    { name: 'Pad King Sod Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Pad King Sod Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: "" },
    { name: 'Pad Ka Paow Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Pad Ka Paow Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: "" },
    { name: 'Pad Prik Paow Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Pad Prik Paow Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: "" },
    { name: 'Cashew Nut Chicken Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Kai Krop Chicken Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Beef Broccoli Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: "" },
    { name: 'Fried Pork Over Red Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: "" },
    { name: 'Siam Pad Thai', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: "" },
    { name: 'Siam Pad Thai Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Rad Na', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: "" },
    { name: 'Rad Na Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Special Rad Na', selected: false, category: 'StirFryNoodle', price: 18.95, quantity: 1, comment: "" },
    { name: 'Pad See Ew', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: "" },
    { name: 'Pad See Ew Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Pad Kee Mao', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: "" },
    { name: 'Pad Kee Mao Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Scrambled Noodle', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Mee Ka Ti', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: "" },
    { name: 'Mee Ka Ti Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Goy See Mee', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: "" },
    { name: 'Goy See Mee Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Fried Noodle', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: "" },
    { name: 'Fried Noodle Shrimp/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Chow Mein', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: "" },
    { name: 'Chow Mein Shrimp/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Khao Soi', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: "" },
    { name: 'Khao Soi Seafood/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Pad Mee', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: "" },
    { name: 'Pad Mee Seafood/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: "" },
    { name: 'Fried Fish With Thai Herbs', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: "" },
    { name: '3 Flavors Fish', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: "" },
    { name: 'Fried Fish With Chili Sauce', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: "" },
    { name: 'Fried Fish With Hot And Sour Sauce', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: "" },
    { name: 'Vegetables Mix', selected: false, category: 'Entree', price: 12, quantity: 1, comment: "" },
    { name: 'Vegetables Mix Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: "" },
    { name: 'Curry Crab', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: "" },
    { name: 'Thai Grilled Chicken/Pork/Beef', selected: false, category: 'Entree', price: 12, quantity: 1, comment: "" },
    { name: 'Pork/Beef Jerky', selected: false, category: 'Entree', price: 12, quantity: 1, comment: "" },
    { name: 'Stir Fried Eggplant', selected: false, category: 'Entree', price: 12, quantity: 1, comment: "" },
    { name: 'Stir Fried Eggplant Shrimp', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: "" },
    { name: 'Flavors Chicken', selected: false, category: 'Entree', price: 12, quantity: 1, comment: "" },
    { name: 'Walnut Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: "" },
    { name: 'Sweet and Sour', selected: false, category: 'Entree', price: 12, quantity: 1, comment: "" },
    { name: 'Sweet and Sour Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: "" },
    { name: 'Pad Woon Sen', selected: false, category: 'Entree', price: 12, quantity: 1, comment: "" },
    { name: 'Pad Woon Sen Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: "" },
    { name: 'Tamarine Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: "" },
    { name: 'Mango Sticky Rice', selected: false , category: 'Dessert', price: 8.99, quantity: 1, comment: ""},
    { name: 'Extra Meat', selected: false , category: 'AddOn', price: 3, quantity: 1, comment: ""},
    { name: 'Extra Vegetable', selected: false , category: 'AddOn', price: 2, quantity: 1, comment: ""},
    { name: 'Extra Rice', selected: false , category: 'AddOn', price: 1, quantity: 1, comment: ""},
    { name: 'Extra Noodle', selected: false , category: 'AddOn', price: 1, quantity: 1, comment: ""},
    { name: 'Extra Sauce', selected: false , category: 'AddOn', price: 1, quantity: 1, comment: ""},
    { name: 'Fried Egg', selected: false , category: 'AddOn', price: 2, quantity: 1, comment: ""}
  ];

  constructor(private router: Router) {}
  
  comment: string = "";

  selectedFoods: any[] = [];

  onToggleSelect(food: any) {
    food.selected = !food.selected;
    this.updateSelectedFoods(food);
  }

  updateSelectedFoods(food: any) {
    if(this.selectedFoods.includes(food)){
      food.quantity++;
    }else{
      this.selectedFoods.push(food);
    }
  }
  
  addComment(food: any){
    console.log(this.comment);
    console.log(food.name);
    food.comment = this.comment;
    this.comment = "";
  }

  removeFood(food: any) {
    food.quantity = 1;
    food.comment = "";
    const index = this.selectedFoods.indexOf(food, 0);
    this.selectedFoods = this.removeItemWithSlice(index);
  }

  add(food: any){
    food.quantity = food.quantity + 1;
  }

  subtract(food: any){
    if(food.quantity < 2){
      this.removeFood(food);
    }else{
      food.quantity = food.quantity - 1;
    }
  }

  removeItemWithSlice(index: number) {
    return [...this.selectedFoods.slice(0, index), ...this.selectedFoods.slice(index + 1)]
  }

  selectedCategory: string = 'All';

  setFilter(category: string) {
    this.selectedCategory = category;
  }

  get filteredFoods(): any[] {
    if (this.selectedCategory === 'All') return this.foods;
    return this.foods.filter(food => food.category === this.selectedCategory);
  }
  tableNumber: string = '0';
  goToSummary() {
    this.router.navigate(['/summary'], {
      state: { selectedFoods: this.selectedFoods, tableNumber: this.tableNumber}
    });
  }

}
