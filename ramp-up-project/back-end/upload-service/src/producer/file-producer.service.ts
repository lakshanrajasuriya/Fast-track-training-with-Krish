import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class FileProducerService {
    constructor(@InjectQueue('file-operation-queue') private queue: Queue) { }

    async readFile(fileName: string) {
        await this.queue.add('read-file', {
            fileName: fileName
        })
    }
}