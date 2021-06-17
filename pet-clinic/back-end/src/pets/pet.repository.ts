import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PetCreateDto } from "src/dto/PetCreate.dto";
import { Pet, PetDocument } from "src/schemas/pet.schema";

@Injectable()
export class PetRepository {
    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) { }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find();
    }

    async findById(id: string): Promise<Pet> {
        return await this.petModel.findById({ _id: id });
    }

    async create(petCreateDto: PetCreateDto) {
        const pet = new this.petModel(petCreateDto);
        return await pet.save();
    }

    async update(id: string, petCreateDto: PetCreateDto): Promise<Pet> {

        let updatePet = await this.petModel.findById({ _id: id });
        const { name, age, breed, color } = petCreateDto;
        updatePet.name = name;
        updatePet.age = age;
        updatePet.breed = breed;
        updatePet.color = color;
        return updatePet.save();
    }

    async findAndDelete(id: string): Promise<Pet> {
        return await this.petModel.findByIdAndDelete({ _id: id });
    }
}