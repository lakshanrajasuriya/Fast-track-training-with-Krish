import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Pet } from './pet.schema';

export type OwnerDocument = Owner & Document;

@Schema()
export class Owner {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    city: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }])
    pets: Pet;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);