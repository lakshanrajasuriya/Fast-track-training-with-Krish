import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnagramService } from './shared/anagram.service';
import { NumberService } from './shared/number.service';
import { LetterService } from './shared/letter.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AnagramService, NumberService, LetterService],
})
export class AppModule {}
