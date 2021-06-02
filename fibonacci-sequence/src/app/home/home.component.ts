import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputValue: number = 0; // To check fibonacci sequence
  message: string = ''; // To print the message

  constructor() { }

  ngOnInit(): void {
  }

  findFibonacci() {

    let sequence = [0]; // To store fibonacci sequence
    let index = 0; // To get the current index of sequence

    while (this.inputValue > sequence[index]) {

      if (sequence[index] >= 1) {
        sequence.push(sequence[index] + (sequence[index - 1]));
      } else {
        sequence.push(sequence[index] + 1);
      }

      index++;
    }

    if (sequence[index] == this.inputValue)
      this.message = index + ' index in fibonacci sequence'
    else
      this.message = 'Not in fibonacci sequence!'
  }

}
