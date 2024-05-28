import { Component, OnInit } from '@angular/core';
import { Textint } from '../../interface/textint';
import { TextservisService } from '../../servis/textservis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { BoxComponent } from '../box/box.component';
import { ZapytComponent } from '../zapyt/zapyt.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormComponent,
    BoxComponent,
    ZapytComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  mytext: Textint[] = [];
  filteredText: Textint[] = [];
  selectedText: Textint | null = null;
  isCreating: boolean = false;
  isEditing: boolean = false;
  isConfirming: boolean = false;
  textToDelete: Textint | null = null;
  searchTerm: string = '';

  constructor(private textService: TextservisService) {}

  ngOnInit(): void {
    this.loadText();
  }

  loadText(): void {
    this.mytext = this.textService.getText();
    this.filterText();
  }

  filterText(): void {
    if (this.searchTerm) {
      this.filteredText = this.mytext.filter((mytext) =>
        mytext.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredText = this.mytext;
    }
  }

  onSearchTermChange(): void {
    this.filterText();
  }

  selectText(mytext: Textint): void {
    this.selectedText = mytext;
    this.isCreating = false;
    this.isEditing = false;
  }

  createText(): void {
    this.selectedText = { id: 0, title: '', content: '' };
    this.isCreating = true;
    this.isEditing = false;
  }

  editText(mytext: Textint): void {
    this.selectedText = mytext;
    this.isCreating = false;
    this.isEditing = true;
  }

  confirmDelete(mytext: Textint): void {
    this.textToDelete = mytext;
    this.isConfirming = true;
  }

  deleteText(confirmed: boolean): void {
    if (confirmed && this.textToDelete) {
      this.textService.deleteText(this.textToDelete.id);
      this.loadText();
      this.selectedText = null;
    }
    this.isConfirming = false;
    this.textToDelete = null;
  }

  cancel(): void {
    this.selectedText = null;
    this.isCreating = false;
    this.isEditing = false;
  }

  onFormSubmitted(): void {
    this.selectedText = null;
    this.isCreating = false;
    this.isEditing = false;
    this.loadText();
  }
}
