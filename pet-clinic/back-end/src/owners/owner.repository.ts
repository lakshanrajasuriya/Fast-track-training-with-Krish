import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OwnerCreateDto } from "src/dto/OwnerCreate.dto";
import { Owner, OwnerDocument } from "src/schemas/Owner.schema";

@Injectable()
export class OwnerRepository {
    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>) { }

    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find();
    }

    async create(OwnerCreateDto: OwnerCreateDto) {
        const Owner = new this.ownerModel(OwnerCreateDto);
        return await Owner.save();
    }

    async findAndDelete(id: string): Promise<Owner> {
        return await this.ownerModel.findByIdAndDelete({ _id: id });
    }

    async update(id: string, ownerCreateDto: OwnerCreateDto): Promise<Owner> {

        let updateOwner = await this.ownerModel.findById({ _id: id });

        const { firstName, lastName, address, city, phone } = ownerCreateDto;
        updateOwner.firstName = firstName;
        updateOwner.lastName = lastName;
        updateOwner.address = address;
        updateOwner.city = city;
        updateOwner.phone = phone;
        // updateOwner.pets = ownerCreateDto.pets;
        return updateOwner.save();
    }
}