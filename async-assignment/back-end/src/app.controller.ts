import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('/anagram')
  findAnagram(@Body() request): Promise<string> {

    return this.appService.findAnagram(request.text1, request.text2)
  }

  @Post('/occurance')
  getOccurance(@Body() request): Promise<any[]> {

    return this.appService.letterCount(request.sentance)
  }

  @Post('/findlargest')
  getLargestNumber(@Body() request): number {

    return this.appService.findLargest(request.numbers, request.position);
  }
}
