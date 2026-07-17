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
    { name: '5.Fried Shrimp', selected: false, category: 'Appetizer', price: 14, quantity: 1, comment: '', printName: 'Fried Shrimp' },
    { name: '6.Fried Fish Ball', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: '', printName: 'Fried Fish Ball' },
    { name: '7.Fried Fish Cake', selected: false, category: 'Appetizer', price: 10, quantity: 1, comment: '', printName: 'Fried Fish Cake' },
    { name: '8.Isaan Sausage', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Isaan Sausage' },
    { name: '9.Satay', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Satay' },
    { name: '10.Pan Fried Dumplings', selected: false, category: 'Appetizer', price: 9, quantity: 1, comment: '', printName: 'Pan Fried Dumplings' },
    { name: '11.Boiled Dumplings', selected: false, category: 'Appetizer', price: 9, quantity: 1, comment: '', printName: 'Boiled Dumplings' },
    { name: '12.Steamed Shrimp Wontons', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Steamed Shrimp Wontons' },
    { name: '13.Spring Roll Wrapped', selected: false, category: 'Appetizer', price: 12, quantity: 1, comment: '', printName: 'Spring Roll Wrapped' },
    { name: '14.Combo Appetizers', selected: false, category: 'Appetizer', price: 15.99, quantity: 1, comment: '', printName: 'Combo Appetizers' },
    { name: '15.Thai Salad', selected: false, category: 'Salad', price: 14, quantity: 1, comment: '', printName: 'Thai Salad' },
    { name: '16.Papaya Salad', selected: false, category: 'Salad', price: 14, quantity: 1, comment: '', printName: 'Papaya Salad' },
    { name: '17.Yum Woon Sen', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Yum Woon Sen' },
    { name: '18.Larb', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Larb' },
    { name: '19.Nam Tok', selected: false, category: 'Salad', price: 15.99, quantity: 1, comment: '', printName: 'Nam Tok' },
    { name: '20.Grilled Beef Salad', selected: false, category: 'Salad', price: 18, quantity: 1, comment: '', printName: 'Grilled Beef Salad' },
    { name: '21.Beef Salad', selected: false, category: 'Salad', price: 18, quantity: 1, comment: '', printName: 'Beef Salad' },
    { name: '22.Seafood Salad', selected: false, category: 'Salad', price: 18, quantity: 1, comment: '', printName: 'Seafood Salad' },
    { name: '23.Naked Shrimp', selected: false, category: 'Salad', price: 18, quantity: 1, comment: '', printName: 'Naked Shrimp' },
    { name: '24.Lemon Salad', selected: false, category: 'Salad', price: 15, quantity: 1, comment: '', printName: 'Lemon Salad' },
    { name: '25.Lemon Grass Salad', selected: false, category: 'Salad', price: 15.99, quantity: 1, comment: '', printName: 'Lemon Grass Salad' },
    { name: '26.Three Crispy Salad', selected: false, category: 'Salad', price: 15.99, quantity: 1, comment: '', printName: 'Three Crispy Salad' },
    { name: '27.Crispy Duck', selected: false, category: 'Salad', price: 18.99, quantity: 1, comment: '', printName: 'Crispy Duck' },
    { name: '28.Fish Salads', selected: false, category: 'Salad', price: 21.99, quantity: 1, comment: '', printName: 'Fish Salads' },
    { name: '29.Wonton Soup Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Wonton Soup Small' },
    { name: '29.Wonton Soup Large', selected: false, category: 'Soup', price: 14, quantity: 1, comment: '', printName: 'Wonton Soup Large' },
    { name: '30.Bean Thread Noodle Soup Small', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Bean Thread Noodle Soup Small' },
    { name: '30.Bean Thread Noodle Soup Large', selected: false, category: 'Soup', price: 14, quantity: 1, comment: '', printName: 'Bean Thread Noodle Soup Large' },
    { name: '31.Tom Yum Small Chicken', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Yum Small Chicken' },
    { name: '31.Tom Yum Small Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Tom Yum Small Shrimp' },
    { name: '31.Tom Yum Large Chicken', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Tom Yum Large Chicken' },
    { name: '31.Tom Yum Large Shrimp', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Tom Yum Large Shrimp' },
    { name: '32.Tom Kha Small Chicken', selected: false, category: 'Soup', price: 12, quantity: 1, comment: '', printName: 'Tom Kha Small Chicken' },
    { name: '32.Tom Kha Small Shrimp', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Tom Kha Small Shrimp' },
    { name: '32.Tom Kha Large Chicken', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Tom Kha Large Chicken' },
    { name: '32.Tom Kha Large Shrimp', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Tom Kha Large Shrimp' },
    { name: '33.Seafood Soup Small', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Seafood Soup Small' },
    { name: '33.Seafood Soup Large', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Seafood Soup Large' },
    { name: '34.Suki Small A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Suki Small' },
    { name: '34.Suki Small B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Suki Small' },
    { name: '34.Suki Large A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Suki Large' },
    { name: '34.Suki Large B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Suki Large' },
    { name: '35.Thai Herbs Soup Joom Zab A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Thai Herbs Soup Joom Zab' },
    { name: '35.Thai Herbs Soup Joom Zab B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Thai Herbs Soup Joom Zab' },
    { name: '36.Special Curry Mix Sauce Kang Pa A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Special Curry Mix Sauce Kang Pa' },
    { name: '36.Special Curry Mix Sauce Kang Pa B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Special Curry Mix Sauce Kang Pa' },
    { name: '37.Mix Vegetable Sour Soup Kang Som A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup Kang Som' },
    { name: '37.Mix Vegetable Sour Soup Kang Som B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Mix Vegetable Sour Soup Kang Som' },
    { name: '38.Nang Lee A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Nang Lee' },
    { name: '38.Nang Lee B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Nang Lee' },
    { name: '39.Red Curry A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Red Curry' },
    { name: '39.Red Curry B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Red Curry' },
    { name: '40.Green Curry A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Green Curry' },
    { name: '40.Green Curry B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Green Curry' },
    { name: '41.Duck Curry', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Duck Curry' },
    { name: '42.Panang A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Panang' },
    { name: '42.Panang B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Panang' },
    { name: '43.Massamon Curry A', selected: false, category: 'Soup', price: 15, quantity: 1, comment: '', printName: 'Massamon Curry' },
    { name: '43.Massamon Curry B', selected: false, category: 'Soup', price: 18, quantity: 1, comment: '', printName: 'Massamon Curry' },
    { name: '44.Thai House Fried Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Thai House Fried Rice' },
    { name: '44.Thai House Fried Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Thai House Fried Rice' },
    { name: '45.Pineapple Fried Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Pineapple Fried Rice' },
    { name: '45.Pineapple Fried Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Pineapple Fried Rice' },
    { name: '46.Thai Sausage Fried Rice', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Thai Sausage Fried Rice' },
    { name: '47.Crab Fried Rice', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Crab Fried Rice' },
    { name: '48.Red Fried Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Red Fried Rice' },
    { name: '48.Red Fried Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Red Fried Rice' },
    { name: '49.Chicken Over Fried Rice', selected: false, category: 'RiceDish', price: 16, quantity: 1, comment: '', printName: 'Chicken Over Fried Rice' },
    { name: '50.Fried Chicken Over Fried Rice', selected: false, category: 'RiceDish', price: 16, quantity: 1, comment: '', printName: 'Fried Chicken Over Fried Rice' },
    { name: '51.Fried Pork Over Red Fried Rice', selected: false, category: 'RiceDish', price: 16.99, quantity: 1, comment: '', printName: 'Fried Pork Over Red Fried Rice' },
    { name: '52.BBQ Pork Over Rice', selected: false, category: 'RiceDish', price: 16.99, quantity: 1, comment: '', printName: 'BBQ Pork Over Rice' },
    { name: '53.Roasted Duck Over Rice', selected: false, category: 'RiceDish', price: 16.99, quantity: 1, comment: '', printName: 'Roasted Duck Over Rice' },
    { name: '54.Thai Stewed Pork Hock Khao Ka Moo', selected: false, category: 'RiceDish', price: 16.99, quantity: 1, comment: '', printName: 'Thai Stewed Pork Hock Khao Ka Moo' },
    { name: '55.Three Combinations Over Rice', selected: false, category: 'RiceDish', price: 16.99, quantity: 1, comment: '', printName: 'Three Combinations Over Rice' },
    { name: '56.Fried Garlic & Pepper Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Fried Garlic & Pepper Over Rice' },
    { name: '56.Fried Garlic & Pepper Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Fried Garlic & Pepper Over Rice' },
    { name: '57.Pad Prik Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Pad Prik Over Rice' },
    { name: '57.Pad Prik Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Pad Prik Over Rice' },
    { name: '58.Pad Prik King Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Pad Prik King Over Rice' },
    { name: '58.Pad Prik King Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Pad Prik King Over Rice' },
    { name: '59.Pad Prik Paow Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Pad Prik Paow Over Rice' },
    { name: '59.Pad Prik Paow Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Pad Prik Paow Over Rice' },
    { name: '60.Pad Ka Paow Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice' },
    { name: '60.Pad Ka Paow Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice' },
    { name: '60.Pad Ka Paow Over Rice Duck', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Pad Ka Paow Over Rice Duck' },
    { name: '61.Pad King Sod Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Pad King Sod Over Rice' },
    { name: '61.Pad King Sod Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Pad King Sod Over Rice' },
    { name: '62.Cashew Nut Chicken Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Cashew Nut Chicken Over Rice' },
    { name: '62.Cashew Nut Chicken Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Cashew Nut Chicken Over Rice' },
    { name: '63.Kai Krop Chicken Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Kai Krop Chicken Over Rice' },
    { name: '63.Kai Krop Chicken Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Kai Krop Chicken Over Rice' },
    { name: '64.Beef Broccoli Over Rice A', selected: false, category: 'RiceDish', price: 15, quantity: 1, comment: '', printName: 'Beef Broccoli Over Rice' },
    { name: '64.Beef Broccoli Over Rice B', selected: false, category: 'RiceDish', price: 18, quantity: 1, comment: '', printName: 'Beef Broccoli Over Rice' },
    { name: '65.Siam Pad Thai A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Siam Pad Thai' },
    { name: '65.Siam Pad Thai B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Siam Pad Thai' },
    { name: '66.Pad See Ew A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Pad See Ew' },
    { name: '66.Pad See Ew B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Pad See Ew' },
    { name: '67.Pad Kee Mao Drunken Noodles A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Pad Kee Mao Drunken Noodles' },
    { name: '67.Pad Kee Mao Drunken Noodles B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Pad Kee Mao Drunken Noodles' },
    { name: '68.Scrambled Noodle', selected: false, category: 'StirFryNoodle', price: 15.99, quantity: 1, comment: '', printName: 'Scrambled Noodle' },
    { name: '69.Chow Mein A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Chow Mein' },
    { name: '69.Chow Mein B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Chow Mein' },
    { name: '70.Mee Ka Ti A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Mee Ka Ti' },
    { name: '70.Mee Ka Ti B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Mee Ka Ti' },
    { name: '71.Pad Mee A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Pad Mee' },
    { name: '71.Pad Mee B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Pad Mee' },
    { name: '72.Rad Na A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Rad Na' },
    { name: '72.Rad Na B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Rad Na' },
    { name: '73.Special Rad Na', selected: false, category: 'StirFryNoodle', price: 21.99, quantity: 1, comment: '', printName: 'Special Rad Na' },
    { name: '74.Goy See Mee A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Goy See Mee' },
    { name: '74.Goy See Mee B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Goy See Mee' },
    { name: '75.Fried Noodle A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Fried Noodle' },
    { name: '75.Fried Noodle B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Fried Noodle' },
    { name: '76.Khao Soi A', selected: false, category: 'StirFryNoodle', price: 15, quantity: 1, comment: '', printName: 'Khao Soi' },
    { name: '76.Khao Soi B', selected: false, category: 'StirFryNoodle', price: 18, quantity: 1, comment: '', printName: 'Khao Soi' },
    { name: '77.Fried Fish With Thai Herbs', selected: false, category: 'Entree', price: 21.99, quantity: 1, comment: '', printName: 'Fried Fish With Thai Herbs' },
    { name: '78.3 Flavors Fish', selected: false, category: 'Entree', price: 21.99, quantity: 1, comment: '', printName: '3 Flavors Fish' },
    { name: '79.Fried Fish With Chili Sauce', selected: false, category: 'Entree', price: 21.99, quantity: 1, comment: '', printName: 'Fried Fish With Chili Sauce' },
    { name: '80.Fried Fish With Hot And Sour Sauce', selected: false, category: 'Entree', price: 21.99, quantity: 1, comment: '', printName: 'Fried Fish With Hot And Sour Sauce' },
    { name: '81.Curry Crab', selected: false, category: 'Entree', price: 18.99, quantity: 1, comment: '', printName: 'Curry Crab' },
    { name: '82.Pad Ka Paow Preserved Duck Egg', selected: false, category: 'Entree', price: 18.99, quantity: 1, comment: '', printName: 'Pad Ka Paow Preserved Duck Egg' },
    { name: '83.Vegetables Mix A', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Vegetables Mix' },
    { name: '83.Vegetables Mix B', selected: false, category: 'Entree', price: 18, quantity: 1, comment: '', printName: 'Vegetables Mix' },
    { name: '84.Stir Fried Eggplant A', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Stir Fried Eggplant' },
    { name: '84.Stir Fried Eggplant B', selected: false, category: 'Entree', price: 18, quantity: 1, comment: '', printName: 'Stir Fried Eggplant' },
    { name: '85.Thai Grilled Chicken/Pork/Beef A', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Thai Grilled Chicken/Pork/Beef' },
    { name: '85.Thai Grilled Chicken/Pork/Beef B', selected: false, category: 'Entree', price: 18, quantity: 1, comment: '', printName: 'Thai Grilled Chicken/Pork/Beef' },
    { name: '86.Pork Jerky', selected: false, category: 'Entree', price: 16.99, quantity: 1, comment: '', printName: 'Pork Jerky' },
    { name: '87.Flavors Chicken', selected: false, category: 'Entree', price: 16.99, quantity: 1, comment: '', printName: 'Flavors Chicken' },
    { name: '88.Sweet and Sour A', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Sweet and Sour' },
    { name: '88.Sweet and Sour B', selected: false, category: 'Entree', price: 18, quantity: 1, comment: '', printName: 'Sweet and Sour' },
    { name: '89.Walnut Shrimp', selected: false, category: 'Entree', price: 18, quantity: 1, comment: '', printName: 'Walnut Shrimp' },
    { name: '90.Tamarind Shrimp', selected: false, category: 'Entree', price: 18, quantity: 1, comment: '', printName: 'Tamarind Shrimp' },
    { name: '91.Pad Woon Sen A', selected: false, category: 'Entree', price: 15, quantity: 1, comment: '', printName: 'Pad Woon Sen' },
    { name: '91.Pad Woon Sen B', selected: false, category: 'Entree', price: 18, quantity: 1, comment: '', printName: 'Pad Woon Sen' },
    { name: '92.Steamed Shrimp and Bean Thread Noodle', selected: false, category: 'Entree', price: 18.99, quantity: 1, comment: '', printName: 'Steamed Shrimp and Bean Thread Noodle' },
    { name: '93.Fried Chicken Wing', selected: false, category: 'Entree', price: 18.99, quantity: 1, comment: '', printName: 'Fried Chicken Wing' },
    { name: '94.Fried Pork Leg', selected: false, category: 'Entree', price: 18.99, quantity: 1, comment: '', printName: 'Fried Pork Leg' },
    { name: '95.Mango Sticky Rice', selected: false, category: 'Dessert', price: 8.99, quantity: 1, comment: '', printName: 'Mango Sticky Rice' },
    { name: 'Extra Meat', selected: false, category: 'AddOn', price: 2, quantity: 1, comment: '', printName: 'Extra Meat' },
    { name: 'Extra Vegetable', selected: false, category: 'AddOn', price: 1, quantity: 1, comment: '', printName: 'Extra Vegetable' },
    { name: 'Extra Broccoli', selected: false, category: 'AddOn', price: 2, quantity: 1, comment: '', printName: 'Extra Broccoli' },
    { name: 'Extra Eggplant', selected: false, category: 'AddOn', price: 2, quantity: 1, comment: '', printName: 'Extra Eggplant' },
    { name: 'Extra Rice', selected: false, category: 'AddOn', price: 1, quantity: 1, comment: '', printName: 'Extra Rice' },
    { name: 'Extra Noodle', selected: false, category: 'AddOn', price: 1, quantity: 1, comment: '', printName: 'Extra Noodle' },
    { name: 'Extra Sauce', selected: false, category: 'AddOn', price: 0.5, quantity: 1, comment: '', printName: 'Extra Sauce' },
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
