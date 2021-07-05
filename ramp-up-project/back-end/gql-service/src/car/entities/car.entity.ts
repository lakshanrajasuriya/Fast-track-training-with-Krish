import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Car {
    @Field()
    id: number
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    email: string
    @Field()
    carMake: string
    @Field()
    carModel: string
    @Field()
    vin: string
    @Field()
    manufacturedDate: string
    @Field({ nullable: true })
    age: number
}