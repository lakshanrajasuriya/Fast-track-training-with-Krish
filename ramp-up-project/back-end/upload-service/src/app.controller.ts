import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { FileProducerService } from './producer/file-producer.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private fileProducerService: FileProducerService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './upload',
      filename: (req, file, cb) => { cb(null, file.originalname) },
    }),
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);

    await this.fileProducerService.readFile(file.originalname);
    return JSON.stringify(file.originalname + ' file received');

  }
}
