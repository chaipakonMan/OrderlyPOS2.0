import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-orders',
  standalone: true,
  imports: [CommonModule],
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

  loadForEdit(order: any) {
    this.router.navigate(['/'], { state: order });
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
}
