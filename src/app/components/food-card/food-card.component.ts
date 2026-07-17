import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() food: any;
  @Output() toggleSelect = new EventEmitter<any>();

  customPrice: string = '';

  toggleSelection() {
    // For items that require a custom price, don't emit here
    if (this.food?.allowCustomPrice) {
      return;
    }

    this.toggleSelect.emit(this.food);
  }

  selectWithCustomPrice(event?: Event) {
    if (event) {
      event.stopPropagation();
    }

    const raw = this.customPrice || this.food?.price || '0';
    const parsed = parseFloat(String(raw));
    if (isNaN(parsed) || parsed <= 0) {
      return;
    }

    const price = Math.round(parsed * 100) / 100;
    const emitted = { ...this.food, price };
    this.toggleSelect.emit(emitted);
    this.customPrice = '';
  }

}
