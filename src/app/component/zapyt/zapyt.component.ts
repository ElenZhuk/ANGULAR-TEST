import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zapyt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zapyt.component.html',
  styleUrl: './zapyt.component.css',
})
export class ZapytComponent {
  @Output() confirmed = new EventEmitter<boolean>();

  confirm(result: boolean): void {
    this.confirmed.emit(result);
  }
}
