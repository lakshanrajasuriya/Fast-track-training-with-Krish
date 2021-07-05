import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import {GraphQLModule} from '@nestjs/graphql';
import {join} from 'path';

@Module({
  imports: [CarModule,GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts'),
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
