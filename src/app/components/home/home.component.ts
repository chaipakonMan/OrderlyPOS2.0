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
    { name: '1.Fried Tofu', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Fried Tofu' },
    { name: '2.Egg Rolls', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Egg Rolls' },
    { name: '3.Pork Egg Rolls', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Pork Egg Rolls' },
    { name: '4.Fried Shrimp Rolls', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Fried Shrimp Rolls' },
    { name: 'Fried Wonton', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Fried Wonton' },
    { name: 'Fried Shrimp', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Fried Shrimp' },
    { name: 'Fried Calamari', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Fried Calamari' },
    { name: 'Fried Fish Cake', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: '', printName: 'Fried Fish Cake' },
    { name: 'Satay', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: '', printName: 'Satay' },
    { name: 'Pan Fried Dumplings', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Pan Fried Dumplings' },
    { name: 'Boiled Dumplings', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Boiled Dumplings' },
    { name: 'Isaan Sausage', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: '', printName: 'Isaan Sausage' },
    { name: 'Steamed Shrimp Wontons', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Steamed Shrimp Wontons' },
    { name: 'Spring Roll Wrapped', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Spring Roll Wrapped' },
    { name: 'Combo Appetizers', selected: false, category: 'Appetizer', price: 15.99, quantity: 1, comment: '', printName: 'Combo Appetizers' },
    { name: 'Fried Pork Leg', selected: false, category: 'Appetizer', price: 18.99, quantity: 1, comment: '', printName: 'Fried Pork Leg' },
    { name: 'Thai Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Thai Salad' },
    { name: 'Papaya Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Papaya Salad' },
    { name: 'Crispy Duck', selected: false, category: 'Salad', price: 18.95, quantity: 1, comment: '', printName: 'Crispy Duck' },
    { name: 'Yum Woon Sen', selected: false, category: 'Salad', price: 12.99, quantity: 1, comment: '', printName: 'Yum Woon Sen' },
    { name: 'Larb', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Larb' },
    { name: 'Grilled Beef Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Grilled Beef Salad' },
    { name: 'Beef Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Beef Salad' },
    { name: 'Seafood Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Seafood Salad' },
    { name: 'Naked Shrimp', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Naked Shrimp' },
    { name: 'Lemon Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Lemon Salad' },
    { name: 'Lemon Grass Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Lemon Grass Salad' },
    { name: 'Three Crispy Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Three Crispy Salad' },
    { name: 'Fish Salads', selected: false, category: 'Salad', price: 19.95, quantity: 1, comment: '', printName: 'Fish Salads' },
    { name: 'Nam Tok', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Nam Tok' },
    { name: 'Wonton Soup Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: '', printName: 'Wonton Soup Small' },
    { name: 'Wonton Soup Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Wonton Soup Large' },
    { name: 'Bean Thread Noodle Soup Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: '', printName: 'Bean Thread Noodle Soup Small' },
    { name: 'Bean Thread Noodle Soup Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Bean Thread Noodle Soup Large' },
    { name: 'Tom Yum Chicken Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: '', printName: 'Tom Yum Chicken Small' },
    { name: 'Tom Yum Chicken Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Yum Chicken Large' },
    { name: 'Tom Yum Shrimp Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Yum Shrimp Small' },
    { name: 'Tom Yum Shrimp Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Tom Yum Shrimp Large' },
    { name: 'Tom Kha Chicken Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: '', printName: 'Tom Kha Chicken Small' },
    { name: 'Tom Kha Chicken Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Kha Chicken Large' },
    { name: 'Tom Kha Shrimp Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Kha Shrimp Small' },
    { name: 'Tom Kha Shrimp Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Tom Kha Shrimp Large' },
    { name: 'Seafood Soup Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Seafood Soup Small' },
    { name: 'Seafood Soup Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Seafood Soup Large' },
    { name: 'Hot Pot Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Hot Pot Bowl' },
    { name: 'Hot Pot Seafood/Combo Bowl', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Hot Pot Seafood/Combo Bowl' },
    { name: 'Hot Pot Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: '', printName: 'Hot Pot Hot Pot' },
    { name: 'Hot Pot Seafood/Combo Hot Pot', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: '', printName: 'Hot Pot Seafood/Combo Hot Pot' },
    { name: 'Thai Herbs Soup “Joom Zab” Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Thai Herbs Soup “Joom Zab” Bowl' },
    { name: 'Thai Herbs Soup “Joom Zab” Bowl Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Thai Herbs Soup “Joom Zab” Bowl Seafood/Combo' },
    { name: 'Thai Herbs Soup “Joom Zab” Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: '', printName: 'Thai Herbs Soup “Joom Zab” Hot Pot' },
    { name: 'Thai Herbs Soup “Joom Zab” Hot Pot Seafood/Combo', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: '', printName: 'Thai Herbs Soup “Joom Zab” Hot Pot Seafood/Combo' },
    { name: 'Special Curry Mix Sauce (No Coconut Milk)', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Special Curry Mix Sauce (No Coconut Milk)' },
    { name: 'Special Curry Mix Sauce (No Coconut Milk) Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Special Curry Mix Sauce (No Coconut Milk) Seafood/Combo' },
    { name: 'Mix Vegetable Sour Soup “Kang Som” Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup “Kang Som” Bowl' },
    { name: 'Mix Vegetable Sour Soup “Kang Som” Bowl Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup “Kang Som” Bowl Seafood/Combo' },
    { name: 'Mix Vegetable Sour Soup “Kang Som” Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup “Kang Som” Hot Pot' },
    { name: 'Mix Vegetable Sour Soup “Kang Som” Hot Pot Seafood/Combo', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup “Kang Som” Hot Pot Seafood/Combo' },
    { name: 'Nang Lee', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Nang Lee' },
    { name: 'Nang Lee Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Nang Lee Shrimp' },
    { name: 'Red Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Red Curry' },
    { name: 'Red Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Red Curry Shrimp' },
    { name: 'Green Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Green Curry' },
    { name: 'Green Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Green Curry Shrimp' },
    { name: 'Duck Curry', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Duck Curry' },
    { name: 'Panang', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Panang' },
    { name: 'Panang Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Panang Shrimp' },
    { name: 'Massamon Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Massamon Curry' },
    { name: 'Massamon Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Massamon Curry Shrimp' },
    { name: 'Thai House Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Thai House Fried Rice' },
    { name: 'Thai House Fried Rice Shrimp', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Thai House Fried Rice Shrimp' },
    { name: 'Pineapple Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pineapple Fried Rice' },
    { name: 'Pineapple Fried Rice Shrimp', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Pineapple Fried Rice Shrimp' },
    { name: 'Thai Sausage Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Thai Sausage Fried Rice' },
    { name: 'Crab Fried Rice', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Crab Fried Rice' },
    { name: 'Red Fried Rice', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Red Fried Rice' },
    { name: 'Chicken Over Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: '', printName: 'Chicken Over Fried Rice' },
    { name: 'Fried Chicken Over Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: '', printName: 'Fried Chicken Over Fried Rice' },
    { name: 'BBQ Pork Over Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: '', printName: 'BBQ Pork Over Rice' },
    { name: 'Roasted Duck Over Rice', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Roasted Duck Over Rice' },
    { name: 'Thai Stewed Pork Hock (Khao Ka Moo)', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Thai Stewed Pork Hock (Khao Ka Moo)' },
    { name: 'Three Combinations Over Rice', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Three Combinations Over Rice' },
    { name: 'Fried Garlic & Pepper Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Fried Garlic & Pepper Over Rice' },
    { name: 'Fried Garlic & Pepper Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Fried Garlic & Pepper Over Rice Shrimp' },
    { name: 'Pad Prik Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad Prik Over Rice' },
    { name: 'Pad Prik Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Prik Over Rice Shrimp' },
    { name: 'Pad Prik King Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad Prik King Over Rice' },
    { name: 'Pad Prik King Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Prik King Over Rice Shrimp' },
    { name: 'Pad King Sod Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad King Sod Over Rice' },
    { name: 'Pad King Sod Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad King Sod Over Rice Shrimp' },
    { name: 'Pad Ka Paow Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice' },
    { name: 'Pad Ka Paow Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice Shrimp' },
    { name: 'Pad Ka Paow Over Rice Duck', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice Duck' },
    { name: 'Pad Prik Paow Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad Prik Paow Over Rice' },
    { name: 'Pad Prik Paow Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Prik Paow Over Rice Shrimp' },
    { name: 'Cashew Nut Chicken Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Cashew Nut Chicken Over Rice' },
    { name: 'Kai Krop Chicken Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Kai Krop Chicken Over Rice' },
    { name: 'Beef Broccoli Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Beef Broccoli Over Rice' },
    { name: 'Fried Pork Over Red Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: '', printName: 'Fried Pork Over Red Fried Rice' },
    { name: 'Siam Pad Thai', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Siam Pad Thai' },
    { name: 'Siam Pad Thai Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Siam Pad Thai Shrimp' },
    { name: 'Rad Na', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Rad Na' },
    { name: 'Rad Na Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Rad Na Shrimp' },
    { name: 'Special Rad Na', selected: false, category: 'StirFryNoodle', price: 18.95, quantity: 1, comment: '', printName: 'Special Rad Na' },
    { name: 'Pad See Ew', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Pad See Ew' },
    { name: 'Pad See Ew Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Pad See Ew Shrimp' },
    { name: 'Pad Kee Mao', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Pad Kee Mao' },
    { name: 'Pad Kee Mao Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Pad Kee Mao Shrimp' },
    { name: 'Scrambled Noodle', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Scrambled Noodle' },
    { name: 'Mee Ka Ti', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Mee Ka Ti' },
    { name: 'Mee Ka Ti Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Mee Ka Ti Shrimp' },
    { name: 'Goy See Mee', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Goy See Mee' },
    { name: 'Goy See Mee Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Goy See Mee Shrimp' },
    { name: 'Fried Noodle', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Fried Noodle' },
    { name: 'Fried Noodle Shrimp/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Fried Noodle Shrimp/Combo' },
    { name: 'Chow Mein', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Chow Mein' },
    { name: 'Chow Mein Shrimp/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Chow Mein Shrimp/Combo' },
    { name: 'Khao Soi', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Khao Soi' },
    { name: 'Khao Soi Seafood/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Khao Soi Seafood/Combo' },
    { name: 'Pad Mee', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Pad Mee' },
    { name: 'Pad Mee Seafood/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Pad Mee Seafood/Combo' },
    { name: 'Fried Fish With Thai Herbs', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: '', printName: 'Fried Fish With Thai Herbs' },
    { name: '3 Flavors Fish', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: '', printName: '3 Flavors Fish' },
    { name: 'Fried Fish With Chili Sauce', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: '', printName: 'Fried Fish With Chili Sauce' },
    { name: 'Fried Fish With Hot And Sour Sauce', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: '', printName: 'Fried Fish With Hot And Sour Sauce' },
    { name: 'Vegetables Mix', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Vegetables Mix' },
    { name: 'Vegetables Mix Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Vegetables Mix Shrimp' },
    { name: 'Curry Crab', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Curry Crab' },
    { name: 'Thai Grilled Chicken/Pork/Beef', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Thai Grilled Chicken/Pork/Beef' },
    { name: 'Pork/Beef Jerky', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Pork/Beef Jerky' },
    { name: 'Stir Fried Eggplant', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Stir Fried Eggplant' },
    { name: 'Stir Fried Eggplant Shrimp', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Stir Fried Eggplant Shrimp' },
    { name: 'Flavors Chicken', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Flavors Chicken' },
    { name: 'Walnut Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Walnut Shrimp' },
    { name: 'Sweet and Sour', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Sweet and Sour' },
    { name: 'Sweet and Sour Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Sweet and Sour Shrimp' },
    { name: 'Pad Woon Sen', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Pad Woon Sen' },
    { name: 'Pad Woon Sen Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Pad Woon Sen Shrimp' },
    { name: 'Tamarine Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Tamarine Shrimp' },
    { name: 'Steamed Shrimp and Bean Thread', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Steamed Shrimp and Bean Thread' },
    { name: 'Preserved Duck Egg with Chicken', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Preserved Duck Egg with Chicken' },
    { name: 'Preserved Duck Egg with Pork', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Preserved Duck Egg with Pork' },
    { name: 'Fried Chicken Wings (Ginger Sauce)', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Fried Chicken Wings (Ginger Sauce)' },
    { name: 'Mango Sticky Rice', selected: false, category: 'Dessert', price: 8.99, quantity: 1, comment: '', printName: 'Mango Sticky Rice' },
    { name: 'Extra Meat', selected: false, category: 'AddOn', price: 2, quantity: 1, comment: '', printName: 'Extra Meat' },
    { name: 'Extra Vegetable', selected: false, category: 'AddOn', price: 1, quantity: 1, comment: '', printName: 'Extra Vegetable' },
    { name: 'Extra Broccoli', selected: false, category: 'AddOn', price: 2, quantity: 1, comment: '', printName: 'Extra Broccoli' },
    { name: 'Extra Eggplant', selected: false, category: 'AddOn', price: 2, quantity: 1, comment: '', printName: 'Extra Eggplant' },
    { name: 'Extra Rice', selected: false, category: 'AddOn', price: 1, quantity: 1, comment: '', printName: 'Extra Rice' },
    { name: 'Extra Noodle', selected: false, category: 'AddOn', price: 1, quantity: 1, comment: '', printName: 'Extra Noodle' },
    { name: 'Extra Sauce', selected: false, category: 'AddOn', price: 1, quantity: 1, comment: '', printName: 'Extra Sauce' },
    { name: 'Fried Egg', selected: false, category: 'AddOn', price: 1.5, quantity: 1, comment: '', printName: 'Fried Egg' },
    { name: 'Side Fried Rice', selected: false, category: 'AddOn', price: 5, quantity: 1, comment: '', printName: 'Side Fried Rice' },
    { name: 'Corkage fee', selected: false, category: 'AddOn', price: 5, quantity: 1, comment: '', printName: 'Corkage fee' },
    { name: 'Thai Iced Tea', selected: false, category: 'Drink', price: 4, quantity: 1, comment: '', printName: 'Thai Iced Tea' },
    { name: 'Thai Iced Coffee', selected: false, category: 'Drink', price: 4, quantity: 1, comment: '', printName: 'Thai Iced Coffee' },
    { name: 'Thai Iced Green Tea', selected: false, category: 'Drink', price: 4, quantity: 1, comment: '', printName: 'Thai Iced Green Tea' },
    { name: 'Second Half Price', selected: false, category: 'Drink', price: 2, quantity: 1, comment: '', printName: 'Second Half Price' },
    { name: 'Large Tea', selected: false, category: 'Drink', price: 8, quantity: 1, comment: '', printName: 'Large Tea' },
    { name: 'Tapioca', selected: false, category: 'Drink', price: 1, quantity: 1, comment: '', printName: 'Tapioca' },
    { name: 'Water Bottle', selected: false, category: 'Drink', price: 1.5, quantity: 1, comment: '', printName: 'Water Bottle' },
    { name: 'Soda', selected: false, category: 'Drink', price: 2.5, quantity: 1, comment: '', printName: 'Soda' },
    { name: 'Hot Tea', selected: false, category: 'Drink', price: 2.5, quantity: 1, comment: '', printName: 'Hot Tea' },
    { name: 'HEINEKEN', selected: false, category: 'Beer', price: 5, quantity: 1, comment: '', printName: 'HEINEKEN' },
    { name: 'MILTER LITE', selected: false, category: 'Beer', price: 5, quantity: 1, comment: '', printName: 'MILTER LITE' },
    { name: 'CORONA', selected: false, category: 'Beer', price: 5, quantity: 1, comment: '', printName: 'CORONA' },
    { name: 'SAMUEL ADAMS', selected: false, category: 'Beer', price: 5, quantity: 1, comment: '', printName: 'SAMUEL ADAMS' },
    { name: 'CHANG', selected: false, category: 'Beer', price: 6, quantity: 1, comment: '', printName: 'CHANG' },
    { name: 'SINGHA', selected: false, category: 'Beer', price: 6, quantity: 1, comment: '', printName: 'SINGHA' }
  ];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.tableNumber = nav?.extras?.state?.['tableNumber'] || '';
    this.selectedFoods = nav?.extras?.state?.['selectedFoods'] || [];
  }

  ngOnInit() {
    if (!this.tableNumber || this.tableNumber.trim() === '') {
      this.tableNumber = '0';
    }
  }

  comment: string = "";

  selectedFoods: any[] = [];

  onToggleSelect(food: any) {
    food.selected = !food.selected;

    const newFood = { ...food };
    newFood.quantity = 1;
    newFood.comment = '';

    this.updateSelectedFoods(newFood);
  }

  updateSelectedFoods(food: any) {
    // If it's an addon don't combine it.
    if (food.category === 'AddOn') {
      this.selectedFoods.push(food);
      return;
    }

    // Try to find existing item with same name and no comment
    const existing = this.selectedFoods.find(
      (f) => f.name === food.name && (!f.comment || f.comment.trim() === '')
    );

    if (existing) {
      existing.quantity++;
    } else {
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
  tableNumber: string = '0';

  setFilter(category: string) {
    this.selectedCategory = category;
  }

  // added in search term, for filter
  searchTerm: string = '';
  
  get filteredFoods(): any[] {
    let list = this.foods;

    if (this.selectedCategory !== 'All') {
      list = list.filter(f => f.category === this.selectedCategory);
    }

    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase();
      list = list.filter(f => f.name.toLowerCase().includes(term));
    }

    return list;
  }

  goToSummary() {
    this.router.navigate(['/summary'], {
      state: { selectedFoods: this.selectedFoods, tableNumber: this.tableNumber}
    });
  }

  saveOrder() {
    const order = {
      tableNumber: this.tableNumber,
      selectedFoods: this.selectedFoods
    };

    let savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    savedOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(savedOrders));
    // reset the home in memory
    this.tableNumber = '0';
    this.selectedFoods = [];
  }

  goToSave() {
    this.router.navigate(['/save'], {
      state: { selectedFoods: this.selectedFoods, tableNumber: this.tableNumber}
    });
  }

}
