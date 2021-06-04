import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sortedWords: any = []; // To store sorted words

  wordsForm = this.formBuilder.group({
    paragraph: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.wordsForm.status == "VALID") { // To check user input
      let paragraph = this.wordsForm.value.paragraph;
      this.extractWords(paragraph);
    }

  }

  extractWords(paragraph: string): void {

    const wordArray = paragraph.replace(/[^\w\s]/gi, '').toLowerCase().split(" ");
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    wordArray.forEach(word => {

      if (vowels.some(wovel => word.includes(wovel))) {
        this.sortedWords.push(this.sortWord(word));
      }
    });
  }

  sortWord(word: string): string {

    const letters = [...word];

    for (let index1 = 0; index1 < letters.length - 1; index1++) {

      for (let index2 = index1 + 1; index2 < letters.length; index2++) {

        if (letters[index1].charCodeAt(0) > letters[index2].charCodeAt(0)) {

          // Swap Letters
          [letters[index1], letters[index2]] = [letters[index2], letters[index1]];
        }
      }
    }

    return letters.join("");
  }

  clearData(): void {

    this.sortedWords = []; // To clear table
  }

}
