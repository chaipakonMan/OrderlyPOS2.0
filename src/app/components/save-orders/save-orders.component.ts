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

  mergeMode: boolean = false;
  mergeSelections: boolean[] = [];
  mergeTableNumber: string = '0';

  startMerge() {
    this.mergeMode = true;
    this.mergeSelections = this.orders.map(() => false);
    this.mergeTableNumber = '0';
  }

  cancelMerge() {
    this.mergeMode = false;
    this.mergeSelections = [];
    this.mergeTableNumber = '0';
  }

  confirmMerge() {
    const selectedIndices = this.mergeSelections
      .map((checked, index) => checked ? index : -1)
      .filter(index => index !== -1);

    if (selectedIndices.length < 2) return;

    const selectedOrders = selectedIndices.map(index => this.orders[index]);
    const allItems = selectedOrders.flatMap(order => order.selectedFoods);

    const mergedItems: any[] = [];

    for (const item of allItems) {
      const hasComment = item.comment && item.comment.trim() !== '';

      if (hasComment || item.category === 'AddOn') {
        // Keep comment items separate
        mergedItems.push({ ...item });
      } else {
        // Try to find existing identical item in mergedItems (same name, no comment)
        const existing = mergedItems.find(
          i => i.name === item.name && (!i.comment || i.comment.trim() === '')
        );

        if (existing) {
          existing.quantity += item.quantity;
        } else {
          mergedItems.push({ ...item });
        }
      }
    }

    // Pick the first selected table's number for merged order (or prompt, up to you)
    const tableNumber = selectedOrders[0].tableNumber;

    const newOrder = { tableNumber, selectedFoods: mergedItems };
    this.orders.push(newOrder);

    // Remove old orders
    this.orders = this.orders.filter((_, index) => !selectedIndices.includes(index));

    // Save updated orders
    localStorage.setItem('orders', JSON.stringify(this.orders));

    // Reset merge UI state
    this.mergeSelections = [];
    this.mergeMode = false;
  }

  canMerge(): boolean {
    return this.mergeSelections.filter(x => x).length >= 2;
  }

  generateReport() {
    let totalSales = 0;
    let totalDrinkSales = 0;
    let totalAlcoholSales = 0;

    // Loop through all saved orders
    for (const order of this.orders) {
      for (const item of order.selectedFoods) {
        const itemTotal = item.quantity * item.price;

        // Add to total sales
        totalSales += itemTotal;

        // Add to category totals
        if (item.category === 'Drink') {
          totalDrinkSales += itemTotal;
        } else if (item.category === 'Beer') {
          totalAlcoholSales += itemTotal;
        }
      }
    }

    // Calculate total food sales (excluding drinks and alcohol)
    const totalFoodSales = totalSales - totalDrinkSales - totalAlcoholSales;

    // Calculate alcohol percentage of total sales
    const alcoholPercentage = totalSales > 0 ? (totalAlcoholSales / totalSales) * 100 : 0;

    // Format the report
    const report = `
=== SALES REPORT ===
Total Food Sales: $${totalFoodSales.toFixed(2)}
Total Drink Sales: $${totalDrinkSales.toFixed(2)}
Total Alcohol Sales: $${totalAlcoholSales.toFixed(2)}
Alcohol % to Total Sales: ${alcoholPercentage.toFixed(2)}%
    `;

    console.log(report);
    alert(report);
  }

}
