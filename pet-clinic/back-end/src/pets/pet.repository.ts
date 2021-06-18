import { Injectable, NotFoundException } from "@nestjs/common";
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
        return await this.petModel.findById({ _id: id })
            .catch(error => {
                console.log('Error: ', error);
                throw new NotFoundException("Cannot find the pet");
            })
    }

    async create(petCreateDto: PetCreateDto): Promise<Pet> {
        const pet = new this.petModel(petCreateDto);
        return await pet.save();
    }

    async update(id: string, petCreateDto: PetCreateDto): Promise<Pet> {
        const { name, age, breed, color } = petCreateDto;

        return await this.petModel.findOne({ _id: id })
            .then(pet => {
                pet.name = name;
                pet.age = age;
                pet.breed = breed;
                pet.color = color;
                return pet.save();
            })
            .catch(error => {
                console.log('Error: ', error);
                throw new NotFoundException("Cannot find the pet");
            });
    }

    async findAndDelete(id: string): Promise<Pet> {
        return await this.petModel.findByIdAndDelete({ _id: id })
            .catch(error => {
                console.log('Error: ', error);
                throw new NotFoundException("Cannot find the pet");
            })
    }
}