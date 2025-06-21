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
    this.tax = (this.subTotal*0.118);
    this.total = this.subTotal + this.tax;
    const now = new Date();
    this.timestamp = now.toLocaleString();
  }

  async printAll() {
    const hasPermission = await this.ensureBluetoothPermissions();
    if (hasPermission) {

        var order = this.generateOrderText();
        if (await this.safeConnect('0C:25:76:6A:EE:61')) {
          await BluetoothPrinter.print({ data: order });
          await BluetoothPrinter.disconnect();
        }

        await this.sleep(3000); // wait just a bit

        var receipt = this.generateReceiptText();
        if (await this.safeConnect('0C:25:76:6A:EC:E8')) {
        await BluetoothPrinter.print({ data: receipt });
        await BluetoothPrinter.disconnect();
        }
    }

  }

  async printCard(cardId: string) {
    const hasPermission = await this.ensureBluetoothPermissions();
    if (hasPermission) {

      if(cardId === "order-card"){
        var order = this.generateOrderText();
        if (await this.safeConnect('0C:25:76:6A:EE:61')) {
          await BluetoothPrinter.print({ data: order });
          await BluetoothPrinter.disconnect();
        }
      }

      if(cardId === "receipt-card"){
        var receipt = this.generateReceiptText();
        if (await this.safeConnect('0C:25:76:6A:EC:E8')) {
        await BluetoothPrinter.print({ data: receipt });
        await BluetoothPrinter.disconnect();
        }
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
    let receipt = '';
    receipt += '\x1D\x21\x01'; 
    receipt += '         City Corner 2\n\n';
    receipt += `Table: ${this.tableNumber}\n`;
    receipt += '-----------------------------\n';
    receipt += 'Item         Qty  Price  Total\n';
    receipt += '-----------------------------\n';

    this.selectedFoods.forEach((item: any) => {
    const name = item.name || '';
    const qty = item.quantity.toString().padStart(3);
    const price = item.price.toFixed(2).padStart(6);
    const total = (item.quantity * item.price).toFixed(2).padStart(7);

    const nameLines = this.wrapText(name, 12);

    nameLines.forEach((line: string, index: number) => {
        if (index === nameLines.length - 1) {
          // Last line → include numbers
          receipt += `${line.padEnd(12)}${qty} ${price} ${total}\n\n`;
        } else {
          // Intermediate lines → name only
          receipt += `${line}\n`;
        }
      });
    });

    receipt += '-----------------------------\n';
    receipt += `Subtotal:               ${this.subTotal.toFixed(2)}\n`;
    receipt += `Tax (11.8%):            ${this.tax.toFixed(2)}\n`;
    receipt += `TOTAL:                $${this.total.toFixed(2)}\n`;
    receipt += '-----------------------------\n';
    receipt += '    Thank you for dining!\n\n';
    receipt += `    ${this.timestamp}\n\n\n\n`;

    return receipt;
  }

  generateOrderText(): string {
    let order = '\n';
    order += '\x1B\x45\x01'; //bold
    order += '\x1D\x21\x01'; //height
    order += '        City Corner 2\n\n';
    order += '-----------------------------\n';

    this.selectedFoods.forEach((item: any) => {

    if (item.category === 'Drink' || item.category === 'Beer') {
      return; // Skip drinks and beers
    }

    const name = item.name || '';
    const qty = `x ${item.quantity}`;
    const comment = item.comment;

    // Wrap name in chunks of 24 (or whatever width fits your printer nicely)
    const nameLines = this.wrapText(name, 18);

    nameLines.forEach((line: string, index: number) => {
      if (index === nameLines.length - 1) {
        // Last line → add quantity
        // Add comment if present
        if (comment && comment.length > 1) {
          order += `${line.padEnd(18)}${qty}\n`;
          order += `{ ${comment} }\n\n`;
        }else{
          order += `${line.padEnd(18)}${qty}\n\n`;
        }

      } else {
        // Other lines → just name
        order += `${line}\n`;
      }
    });

  });

    order += '-----------------------------\n';
    order += `   ${this.timestamp}\n`;
    order += '\n'
    order += `           Table: ${this.tableNumber}\n\n\n\n`;
    return order;
  }

  async safeConnect(address: string, retries = 3): Promise<boolean> {
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

  wrapText(text: string, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + word).length <= maxWidth) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines;
  }

  goToSave() {
    this.router.navigate(['/save'], {
      state: { selectedFoods: this.selectedFoods, tableNumber: this.tableNumber}
    });
  }

}
