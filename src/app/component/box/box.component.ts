import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Textint } from '../../interface/textint';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent {
  title = 'Перегляд змісту замітки';
  @Input() myText!: Textint;
  @Output() cancel = new EventEmitter<void>();

  onCancel(): void {
    this.cancel.emit();
  }
}
