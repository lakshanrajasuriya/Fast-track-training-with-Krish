import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import readXlsxFile from 'read-excel-file/node';
import { CarService } from '../car/car.service';

@Processor('file-operation-queue')
export class FileConsumer {

    constructor(private carService: CarService) { }

    @Process('read-file')
    async readFile(job: Job<unknown>) {
        let jobData: any = job.data;

        readXlsxFile('./upload/' + jobData.fileName).then((rows: any) => {

            for (let row in rows) {
                if (Number(row) != 0) {
                    let age = new Date().getFullYear() - new Date(rows[row][7]).getFullYear();
                    let car = {
                        id: rows[row][0],
                        firstName: rows[row][1],
                        lastName: rows[row][2],
                        email: rows[row][3],
                        carMake: rows[row][4],
                        carModel: rows[row][5],
                        vin: rows[row][6],
                        manufacturedDate: rows[row][7],
                        age: age
                    }
                    this.carService.create(car);
                }
            }
        }).catch(err => {
            console.log("Error: ", err)
        })
    }
}