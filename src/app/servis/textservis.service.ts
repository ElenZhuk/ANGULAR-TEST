import { Injectable } from '@angular/core';
import { Textint } from '../interface/textint';

@Injectable({
  providedIn: 'root',
})
export class TextservisService {
  private storageKey = 'mytext';

  constructor() {}

  getText(): Textint[] {
    const mytext = localStorage.getItem(this.storageKey);
    return mytext ? JSON.parse(mytext) : [];
  }

  getTextById(id: number): Textint | undefined {
    const mytext = this.getText();
    return mytext.find((mytext) => mytext.id === id);
  }

  addText(textint: Textint): void {
    const mytext = this.getText();
    mytext.push(textint);
    localStorage.setItem(this.storageKey, JSON.stringify(mytext));
  }

  updateText(updatedText: Textint): void {
    let mytext = this.getText();
    mytext = mytext.map((textint) =>
      textint.id === updatedText.id ? updatedText : textint
    );
    localStorage.setItem(this.storageKey, JSON.stringify(mytext));
  }

  deleteText(id: number): void {
    let mytext = this.getText();
    mytext = mytext.filter((textint) => textint.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(mytext));
  }
}
