import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'App started on port 3000';
  }

  // with async await
  async findAnagram(text1: string, text2: string): Promise<string> {

    let sortedText_1 = await this.sortText(text1.toLowerCase());
    let sortedText_2 = await this.sortText(text2.toLowerCase());

    let result = sortedText_1 === sortedText_2 ? "Second word is an Anagram" : "Second word is not an Anagram!";

    return `{"message":"${result}"}`;
  }


  // To find anagram
  sortText(text: string): any {

    let arr = text.split("");

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {

              // To swap elements
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
          }
        }
        resolve(arr.join(""));
      }, 1000)
    })


  }

  // with promises
  letterCount(sentence: string): Promise<any[]> {
    let charArr = sentence.replace(/ /g, '').toLowerCase().split("");
    let letters = new Map(); // To store letters with count

    for (let i = 0; i < charArr.length; i++) {
      if (letters.has(charArr[i])) {

        letters.set(charArr[i], letters.get(charArr[i]) + 1);
      }
      else {
        letters.set(charArr[i], 1)
      }
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...letters])
      }, 2000);
    });

  }


  // with calback function
  findLargest(numbers: number[], position: number): any {
    let numbersArray = [];

    this.sortNumbers(numbers, (result) => {
      numbersArray = result;
    });

    return numbersArray[position - 1];
  }

  // To find the largest
  sortNumbers(numbers: number[], callback) {

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] < numbers[j]) {
          // To swap elements
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
        }
      }
    }
    callback(numbers);
  }
}
