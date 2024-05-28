import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Textint } from '../../interface/textint';
import { TextservisService } from '../../servis/textservis.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  title = 'Ввід-редагування замітки';
  @Input() myText!: Textint;
  @Output() formSubmitted = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private textService: TextservisService) {}

  ngOnInit(): void {
    console.log(this.myText);
  }

  onSubmit(userForm: NgForm): void {
    const frmValue = userForm.form.value;

    if (this.myText.id) {
      const newText: Textint = {
        id: this.myText.id,
        title: frmValue.title,
        content: frmValue.content,
      };
      this.textService.updateText(newText);
    } else {
      const newText: Textint = {
        id: Date.now(),
        title: frmValue.title,
        content: frmValue.content,
      };
      this.textService.addText(newText);
    }
    this.formSubmitted.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
