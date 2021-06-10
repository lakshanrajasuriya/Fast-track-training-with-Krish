import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberService {

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
