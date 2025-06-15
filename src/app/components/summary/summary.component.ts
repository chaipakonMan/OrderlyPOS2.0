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
      if(cardId === "order-card"){
        console.log("order!");
        await BluetoothPrinter.connect({ address: ':0C:25:76:6A:EC:E8' });
        await BluetoothPrinter.print({ data: 'Hello, Order!' });
        await BluetoothPrinter.disconnect();
      }

      if(cardId === "receipt-card"){
        console.log("receipt!");
        await BluetoothPrinter.connect({ address: ':0C:25:76:6A:EC:E8' });
        await BluetoothPrinter.print({ data: 'Hello, Receipt!' });
        await BluetoothPrinter.disconnect();
      }

      // TODO refactor this method, just set up the print content and address in the if.
      // and print job start here with using text content.
      // example here.
      var content = 'Store Receipt\n\nITEMS\n\n'
          content += 'Store Order\n\nITEMS\n\n';

        await BluetoothPrinter.connect({ address: ':0C:25:76:6A:EC:E8' });
        await BluetoothPrinter.print({ data: content });
        await BluetoothPrinter.disconnect();
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


}
