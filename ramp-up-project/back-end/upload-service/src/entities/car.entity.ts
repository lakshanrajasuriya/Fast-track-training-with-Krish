import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Car {
    @Column()
    @PrimaryColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    carMake: string

    @Column()
    carModel: string

    @Column()
    vin: string

    @Column()
    manufacturedDate: Date

    @Column()
    age: number
}