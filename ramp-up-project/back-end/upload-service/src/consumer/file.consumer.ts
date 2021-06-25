import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import readXlsxFile from 'read-excel-file/node'

@Processor('file-operation-queue')
export class FileConsumer {
    constructor() { }

    @Process('read-file')
    readFile(job: Job<unknown>) {
        let jobData: any = job.data;

        readXlsxFile('./upload/' + jobData.fileName).then((rows: any) => {
            console.log(rows)
        }).catch(err => {
            console.log("Error: ", err)
        })
    }
}