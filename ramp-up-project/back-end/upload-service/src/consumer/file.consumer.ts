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
                    let car = {
                        id: rows[row][0],
                        first_name: rows[row][1],
                        last_name: rows[row][2],
                        email: rows[row][3],
                        car_make: rows[row][4],
                        car_model: rows[row][5],
                        vin_number: rows[row][6],
                        manufactured_date: rows[row][7]
                    }
                    this.carService.create(car);
                }
            }
        }).catch(err => {
            console.log("Error: ", err)
        })
    }
}