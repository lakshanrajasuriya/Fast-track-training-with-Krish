import { Injectable } from '@nestjs/common';

@Injectable()
export class LetterService {

    getCount(sentence: string): any {
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

        return [...letters];
    }
}
