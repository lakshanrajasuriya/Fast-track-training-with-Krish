import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {

  // To find anagram
  sortText(text: string): any {

    let arr = text.split("");

    return new Promise((resolve, reject) => {

      try {
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {

              // To swap elements
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }

          }
        }

        resolve(arr.join(""));

      } catch (e) {
        reject("Error: Cannot sort the text");
      }
    })
  }
}
