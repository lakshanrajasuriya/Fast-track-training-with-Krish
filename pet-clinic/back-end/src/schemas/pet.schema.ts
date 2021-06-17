import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;

    @Prop()
    color: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);