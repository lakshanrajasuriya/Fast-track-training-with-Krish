import { Injectable } from '@nestjs/common';
import { AnagramService } from './shared/anagram.service';
import { LetterService } from './shared/letter.service';
import { NumberService } from './shared/number.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'App started on port 3000';
  }

  constructor(
    private anagramService: AnagramService,
    private numberService: NumberService,
    private letterService: LetterService
  ) { }

  // With async await
  async findAnagram(text1: string, text2: string): Promise<string> {

    let sortedText_1 = await this.anagramService.sortText(text1.toLowerCase());
    let sortedText_2 = await this.anagramService.sortText(text2.toLowerCase());

    let result = sortedText_1 === sortedText_2 ? "Second word is an Anagram" : "Second word is not an Anagram!";

    return JSON.stringify(result);
  }

  // With promises
  letterCount(sentence: string): Promise<string[]> {

    return new Promise((resolve, reject) => {
      resolve(this.letterService.getCount(sentence))
    })
  }


  // With calback function
  findLargest(numbers: number[], position: number): any {
    let numbersArray = [];

    this.numberService.sortNumbers(numbers, (result) => {
      numbersArray = result;
    });

    return numbersArray[position - 1];
  }


}
