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
    { name: '5.Fried Wonton', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Fried Wonton' },
    { name: '6.Fried Shrimp', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Fried Shrimp' },
    { name: '7.Fried Calamari', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Fried Calamari' },
    { name: '8.Fried Fish Cake', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: '', printName: 'Fried Fish Cake' },
    { name: '9.Satay', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: '', printName: 'Satay' },
    { name: '10.Pan Fried Dumplings', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Pan Fried Dumplings' },
    { name: '11.Boiled Dumplings', selected: false, category: 'Appetizer', price: 8, quantity: 1, comment: '', printName: 'Boiled Dumplings' },
    { name: '12.Isaan Sausage', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: '', printName: 'Isaan Sausage' },
    { name: '13.Steamed Shrimp Wontons', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Steamed Shrimp Wontons' },
    { name: '14.Spring Roll Wrapped', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Spring Roll Wrapped' },
    { name: '15.Combo Appetizers', selected: false, category: 'Appetizer', price: 15.99, quantity: 1, comment: '', printName: 'Combo Appetizers' },
    { name: '16.Fried Pork Leg', selected: false, category: 'Appetizer', price: 18.99, quantity: 1, comment: '', printName: 'Fried Pork Leg' },
    { name: '17.Thai Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Thai Salad' },
    { name: '18.Papaya Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Papaya Salad' },
    { name: '19.Crispy Duck', selected: false, category: 'Salad', price: 18.95, quantity: 1, comment: '', printName: 'Crispy Duck' },
    { name: '20.Yum Woon Sen', selected: false, category: 'Salad', price: 12.99, quantity: 1, comment: '', printName: 'Yum Woon Sen' },
    { name: '21.Larb', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Larb' },
    { name: '22.Grilled Beef Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Grilled Beef Salad' },
    { name: '23.Beef Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Beef Salad' },
    { name: '24.Seafood Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Seafood Salad' },
    { name: '25.Naked Shrimp', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Naked Shrimp' },
    { name: '26.Lemon Salad', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Lemon Salad' },
    { name: '27.Lemon Grass Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Lemon Grass Salad' },
    { name: '28.Three Crispy Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Three Crispy Salad' },
    { name: '29.Fish Salads', selected: false, category: 'Salad', price: 19.95, quantity: 1, comment: '', printName: 'Fish Salads' },
    { name: '30.Nam Tok', selected: false, category: 'Salad', price: 12, quantity: 1, comment: '', printName: 'Nam Tok' },
    { name: '31.Wonton Soup Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: '', printName: 'Wonton Soup Small' },
    { name: '31.Wonton Soup Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Wonton Soup Large' },
    { name: '32.Bean Thread Noodle Soup Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: '', printName: 'Bean Thread Noodle Soup Small' },
    { name: '32.Bean Thread Noodle Soup Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Bean Thread Noodle Soup Large' },
    { name: '33.Tom Yum Chicken Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: '', printName: 'Tom Yum Chicken Small' },
    { name: '33.Tom Yum Chicken Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Yum Chicken Large' },
    { name: '33.Tom Yum Shrimp Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Yum Shrimp Small' },
    { name: '33.Tom Yum Shrimp Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Tom Yum Shrimp Large' },
    { name: '34.Tom Kha Chicken Small', selected: false, category: 'Soup', price: 10, quantity: 1, comment: '', printName: 'Tom Kha Chicken Small' },
    { name: '34.Tom Kha Chicken Large', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Kha Chicken Large' },
    { name: '34.Tom Kha Shrimp Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Kha Shrimp Small' },
    { name: '34.Tom Kha Shrimp Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Tom Kha Shrimp Large' },
    { name: '35.Seafood Soup Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Seafood Soup Small' },
    { name: '35.Seafood Soup Large', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Seafood Soup Large' },
    { name: '36.Hot Pot Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Hot Pot Bowl' },
    { name: '36.Hot Pot Seafood/Combo Bowl', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Hot Pot Seafood/Combo Bowl' },
    { name: '36.Hot Pot Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: '', printName: 'Hot Pot Hot Pot' },
    { name: '36.Hot Pot Seafood/Combo Hot Pot', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: '', printName: 'Hot Pot Seafood/Combo Hot Pot' },
    { name: '37.Thai Herbs Soup “Joom Zab” Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Thai Herbs Soup “Joom Zab” Bowl' },
    { name: '37.Thai Herbs Soup “Joom Zab” Bowl Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Thai Herbs Soup “Joom Zab” Bowl Seafood/Combo' },
    { name: '37.Thai Herbs Soup “Joom Zab” Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: '', printName: 'Thai Herbs Soup “Joom Zab” Hot Pot' },
    { name: '37.Thai Herbs Soup “Joom Zab” Hot Pot Seafood/Combo', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: '', printName: 'Thai Herbs Soup “Joom Zab” Hot Pot Seafood/Combo' },
    { name: '38.Special Curry Mix Sauce (No Coconut Milk)', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Special Curry Mix Sauce (No Coconut Milk)' },
    { name: '38.Special Curry Mix Sauce (No Coconut Milk) Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Special Curry Mix Sauce (No Coconut Milk) Seafood/Combo' },
    { name: '39.Mix Vegetable Sour Soup “Kang Som” Bowl', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup “Kang Som” Bowl' },
    { name: '39.Mix Vegetable Sour Soup “Kang Som” Bowl Seafood/Combo', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup “Kang Som” Bowl Seafood/Combo' },
    { name: '39.Mix Vegetable Sour Soup “Kang Som” Hot Pot', selected: false, category: 'Soup', price: 15.95, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup “Kang Som” Hot Pot' },
    { name: '39.Mix Vegetable Sour Soup “Kang Som” Hot Pot Seafood/Combo', selected: false, category: 'Soup', price: 19.95, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup “Kang Som” Hot Pot Seafood/Combo' },
    { name: '40.Nang Lee', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Nang Lee' },
    { name: '40.Nang Lee Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Nang Lee Shrimp' },
    { name: '41.Red Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Red Curry' },
    { name: '41.Red Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Red Curry Shrimp' },
    { name: '42.Green Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Green Curry' },
    { name: '42.Green Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Green Curry Shrimp' },
    { name: '43.Duck Curry', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Duck Curry' },
    { name: '44.Panang', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Panang' },
    { name: '44.Panang Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Panang Shrimp' },
    { name: '45.Massamon Curry', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Massamon Curry' },
    { name: '45.Massamon Curry Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Massamon Curry Shrimp' },
    { name: '46.Thai House Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Thai House Fried Rice' },
    { name: '46.Thai House Fried Rice Shrimp', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Thai House Fried Rice Shrimp' },
    { name: '47.Pineapple Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pineapple Fried Rice' },
    { name: '47.Pineapple Fried Rice Shrimp', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Pineapple Fried Rice Shrimp' },
    { name: '48.Thai Sausage Fried Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Thai Sausage Fried Rice' },
    { name: '49.Crab Fried Rice', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Crab Fried Rice' },
    { name: '50.Red Fried Rice', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Red Fried Rice' },
    { name: '51.Chicken Over Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: '', printName: 'Chicken Over Fried Rice' },
    { name: '52.Fried Chicken Over Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: '', printName: 'Fried Chicken Over Fried Rice' },
    { name: '53.BBQ Pork Over Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: '', printName: 'BBQ Pork Over Rice' },
    { name: '54.Roasted Duck Over Rice', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Roasted Duck Over Rice' },
    { name: '55.Thai Stewed Pork Hock (Khao Ka Moo)', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Thai Stewed Pork Hock (Khao Ka Moo)' },
    { name: '56.Three Combinations Over Rice', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Three Combinations Over Rice' },
    { name: '57.Fried Garlic & Pepper Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Fried Garlic & Pepper Over Rice' },
    { name: '57.Fried Garlic & Pepper Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Fried Garlic & Pepper Over Rice Shrimp' },
    { name: '58.Pad Prik Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad Prik Over Rice' },
    { name: '58.Pad Prik Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Prik Over Rice Shrimp' },
    { name: '59.Pad Prik King Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad Prik King Over Rice' },
    { name: '59.Pad Prik King Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Prik King Over Rice Shrimp' },
    { name: '60.Pad King Sod Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad King Sod Over Rice' },
    { name: '60.Pad King Sod Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad King Sod Over Rice Shrimp' },
    { name: '61.Pad Ka Paow Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice' },
    { name: '61.Pad Ka Paow Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice Shrimp' },
    { name: '61.Pad Ka Paow Over Rice Duck', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice Duck' },
    { name: '62.Pad Prik Paow Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Pad Prik Paow Over Rice' },
    { name: '62.Pad Prik Paow Over Rice Shrimp', selected: false, category: 'RiceDish', price: 15.99, quantity: 1, comment: '', printName: 'Pad Prik Paow Over Rice Shrimp' },
    { name: '63.Cashew Nut Chicken Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Cashew Nut Chicken Over Rice' },
    { name: '64.Kai Krop Chicken Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Kai Krop Chicken Over Rice' },
    { name: '65.Beef Broccoli Over Rice', selected: false, category: 'RiceDish', price: 12, quantity: 1, comment: '', printName: 'Beef Broccoli Over Rice' },
    { name: '66.Fried Pork Over Red Fried Rice', selected: false, category: 'RiceDish', price: 12.99, quantity: 1, comment: '', printName: 'Fried Pork Over Red Fried Rice' },
    { name: '67.Siam Pad Thai', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Siam Pad Thai' },
    { name: '67.Siam Pad Thai Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Siam Pad Thai Shrimp' },
    { name: '68.Rad Na', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Rad Na' },
    { name: '68.Rad Na Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Rad Na Shrimp' },
    { name: '69.Special Rad Na', selected: false, category: 'StirFryNoodle', price: 18.95, quantity: 1, comment: '', printName: 'Special Rad Na' },
    { name: '70.Pad See Ew', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Pad See Ew' },
    { name: '70.Pad See Ew Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Pad See Ew Shrimp' },
    { name: '71.Pad Kee Mao', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Pad Kee Mao' },
    { name: '71.Pad Kee Mao Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Pad Kee Mao Shrimp' },
    { name: '72.Scrambled Noodle', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Scrambled Noodle' },
    { name: '73.Mee Ka Ti', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Mee Ka Ti' },
    { name: '73.Mee Ka Ti Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Mee Ka Ti Shrimp' },
    { name: '74.Goy See Mee', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Goy See Mee' },
    { name: '74.Goy See Mee Shrimp', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Goy See Mee Shrimp' },
    { name: '75.Fried Noodle', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Fried Noodle' },
    { name: '75.Fried Noodle Shrimp/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Fried Noodle Shrimp/Combo' },
    { name: '76.Chow Mein', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Chow Mein' },
    { name: '76.Chow Mein Shrimp/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Chow Mein Shrimp/Combo' },
    { name: '77.Khao Soi', selected: false, category: 'StirFryNoodle', price: 12, quantity: 1, comment: '', printName: 'Khao Soi' },
    { name: '77.Khao Soi Seafood/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Khao Soi Seafood/Combo' },
    { name: '78.Pad Mee', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Pad Mee' },
    { name: '78.Pad Mee Seafood/Combo', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Pad Mee Seafood/Combo' },
    { name: '79.Fried Fish With Thai Herbs', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: '', printName: 'Fried Fish With Thai Herbs' },
    { name: '80.3 Flavors Fish', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: '', printName: '3 Flavors Fish' },
    { name: '81.Fried Fish With Chili Sauce', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: '', printName: 'Fried Fish With Chili Sauce' },
    { name: '82.Fried Fish With Hot And Sour Sauce', selected: false, category: 'Entree', price: 19.95, quantity: 1, comment: '', printName: 'Fried Fish With Hot And Sour Sauce' },
    { name: '83.Vegetables Mix', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Vegetables Mix' },
    { name: '83.Vegetables Mix Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Vegetables Mix Shrimp' },
    { name: '84.Curry Crab', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Curry Crab' },
    { name: '85.Thai Grilled Chicken/Pork/Beef', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Thai Grilled Chicken/Pork/Beef' },
    { name: '86.Pork/Beef Jerky', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Pork/Beef Jerky' },
    { name: '87.Stir Fried Eggplant', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Stir Fried Eggplant' },
    { name: '87.Stir Fried Eggplant Shrimp', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Stir Fried Eggplant Shrimp' },
    { name: '88.Flavors Chicken', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Flavors Chicken' },
    { name: '89.Walnut Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Walnut Shrimp' },
    { name: '90.Sweet and Sour', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Sweet and Sour' },
    { name: '90.Sweet and Sour Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Sweet and Sour Shrimp' },
    { name: '91.Pad Woon Sen', selected: false, category: 'Entree', price: 12, quantity: 1, comment: '', printName: 'Pad Woon Sen' },
    { name: '91.Pad Woon Sen Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Pad Woon Sen Shrimp' },
    { name: '92.Tamarine Shrimp', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Tamarine Shrimp' },
    { name: 'Steamed Shrimp and Bean Thread', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Steamed Shrimp and Bean Thread' },
    { name: 'Preserved Duck Egg with Chicken', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Preserved Duck Egg with Chicken' },
    { name: 'Preserved Duck Egg with Pork', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Preserved Duck Egg with Pork' },
    { name: 'Fried Chicken Wings (Ginger Sauce)', selected: false, category: 'Entree', price: 15.99, quantity: 1, comment: '', printName: 'Fried Chicken Wings (Ginger Sauce)' },
    { name: '93.Mango Sticky Rice', selected: false, category: 'Dessert', price: 8.99, quantity: 1, comment: '', printName: 'Mango Sticky Rice' },
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
