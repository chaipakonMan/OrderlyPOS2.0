import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothPrinter } from '@kduma-autoid/capacitor-bluetooth-printer';
import { CommonModule } from '@angular/common';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  tableNumber: string = '';
  subTotal: number = 0;
  tax: number = 0;
  total: number = 0;
  selectedFoods: any = {};

  timestamp: string = '';
  
  constructor(private router: Router, private androidPermissions: AndroidPermissions) {
    const nav = this.router.getCurrentNavigation();
    this.selectedFoods = nav?.extras?.state?.['selectedFoods'] || {};
    this.tableNumber = nav?.extras?.state?.['tableNumber'] || {};
  }
  
  ngOnInit(): void {
    for (let i = 0; i < this.selectedFoods.length; i++) {
      this.subTotal = this.subTotal + (this.selectedFoods[i].quantity * this.selectedFoods[i].price);
    }
    this.tax = this.roundToTwo(this.subTotal*0.118);
    this.total = this.subTotal + this.tax;
    const now = new Date();
    this.timestamp = now.toLocaleString();
  }
  
  roundToTwo(num: number): number {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  async printCard(cardId: string) {
    const hasPermission = await this.ensureBluetoothPermissions();
    if (hasPermission) {
        var order = this.generateOrderText();
        if (await this.safeConnect('0C:25:76:6A:EE:61')) {
          await BluetoothPrinter.print({ data: order });
          await BluetoothPrinter.disconnect();
        }

        await this.sleep(2000); // wait just a bit

        var receipt = this.generateReceiptText();
        if (await this.safeConnect('0C:25:76:6A:EC:E8')) {
        await BluetoothPrinter.print({ data: receipt });
        await BluetoothPrinter.disconnect();
        }
    }

  }

  goToHome() {
    this.router.navigate(['/']);
  }

  async ensureBluetoothPermissions(): Promise<boolean> {
    const perms = [
      'android.permission.BLUETOOTH_CONNECT',
      'android.permission.BLUETOOTH_SCAN',
      'android.permission.ACCESS_FINE_LOCATION'
    ];

    for (const perm of perms) {
      const result = await this.androidPermissions.checkPermission(perm);
      if (!result.hasPermission) {
        const request = await this.androidPermissions.requestPermission(perm);
        if (!request.hasPermission) {
          console.error(`Permission ${perm} denied.`);
          return false;
        }
      }
    }

    return true;
  }

  generateReceiptText(): string {
    let receipt = '\n';
    receipt += '         City Corner 2\n';
    receipt += `Table: ${this.tableNumber}\n`;
    receipt += '-----------------------------\n';
    receipt += 'Item         Qty  Price  Total\n';
    receipt += '-----------------------------\n';

    this.selectedFoods.forEach((item: any) => {
      const name = (item.name || '').padEnd(12).slice(0, 12);
      const qty = item.quantity.toString().padStart(3);
      const price = item.price.toFixed(2).padStart(6);
      const total = (item.quantity * item.price).toFixed(2).padStart(7);
      receipt += `${name}${qty} ${price} ${total}\n`;
    });

    receipt += '-----------------------------\n';
    receipt += `Subtotal:               ${this.subTotal.toFixed(2)}\n`;
    receipt += `Tax (11.8%):            ${this.tax.toFixed(2)}\n`;
    receipt += `TOTAL:                $${this.total.toFixed(2)}\n`;
    receipt += '-----------------------------\n';
    receipt += '    Thank you for dining!\n';
    receipt += `    ${this.timestamp}\n\n\n\n`;

    return receipt;
  }

  generateOrderText(): string {
    let order = '\n\n\n';
    order += '       City Corner Kitchen\n\n';
    order += '---------------------------\n';

    this.selectedFoods.forEach((item: any) => {
      const name = (item.name || '').padEnd(18).slice(0, 18); // trim long names
      const qty = `x${item.quantity}`;
      order += `${name}     ${qty}\n`;
    });

    order += '---------------------------\n';
    order += `   ${this.timestamp}\n`;
    order += `           Table: ${this.tableNumber}\n\n\n\n`;
    return order;
  }

  async safeConnect(address: string, retries = 2): Promise<boolean> {
    for (let i = 0; i < retries; i++) {
      try {
        await BluetoothPrinter.connect({ address });
        return true;
      } catch {
        await this.sleep(1000); // wait then retry
      }
    }
    return false;
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }




}
