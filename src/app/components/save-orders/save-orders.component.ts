import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-save-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './save-orders.component.html',
  styleUrls: ['./save-orders.component.scss']
})
export class SaveOrdersComponent {

  constructor(private router: Router) {}
  
  orders: any[] = [];

  ngOnInit() {
    this.orders = JSON.parse(localStorage.getItem('orders') || '[]');
    console.log(this.orders);
  }

  loadForEdit(order: any, index: number) {
    this.router.navigate(['/'], { state: order });
    this.deleteOrder(index);
  }

  printOrder(order: any) {
    this.router.navigate(['/summary'], { state: order });
  }

  deleteOrder(index: number) {
    this.orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  splitModeIndex: number | null = null;
  splitSelections: boolean[] = [];

  startSplit(index: number) {
    this.splitModeIndex = index;
    const order = this.orders[index];
    this.splitSelections = order.selectedFoods.map(() => false);
  }

  cancelSplit() {
    this.splitModeIndex = null;
    this.splitSelections = [];
    this.splitTableNumber = '0';
  }

  saveSplit(originalOrder: any, index: number) {
    const selectedFoods = originalOrder.selectedFoods.filter((_: any, i: number) => this.splitSelections[i]);

    if (selectedFoods.length === 0) return;

    // 1. Create new split order with selected items
    const newOrder = {
      tableNumber: this.splitTableNumber,
      selectedFoods: selectedFoods
    };
    this.orders.push(newOrder);

    // 2. Remove split items from original order
    const remainingItems = originalOrder.selectedFoods.filter((_: any, i: number) => !this.splitSelections[i]);
    this.orders[index].selectedFoods = remainingItems;

    // 3. Persist the updated orders array to localStorage
    localStorage.setItem('orders', JSON.stringify(this.orders));

    this.cancelSplit(); // reset
  }

  splitTableNumber: string = '0';

  clearAllOrders() {
    const confirmed = confirm('Are you sure you want to delete all saved orders?');
    if (confirmed) {
      this.orders = [];
      localStorage.removeItem('orders');
    }
  }

}
