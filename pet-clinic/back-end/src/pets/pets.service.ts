import { Injectable } from '@nestjs/common';
import { PetCreateDto } from 'src/dto/PetCreate.dto';
import { PetRepository } from './pet.repository';

@Injectable()
export class PetsService {
    constructor(private petRepository: PetRepository) { }

    findAll() {
        return this.petRepository.findAll();
    }

    findById(id: string) {
        return this.petRepository.findById(id);
    }

    createPet(petCreateDto: PetCreateDto) {
        this.petRepository.create(petCreateDto);
    }

    updatePet(id: string, petCreateDto: PetCreateDto) {
        this.petRepository.update(id, petCreateDto);
    }

    findAndDelete(id: string) {
        return this.petRepository.findAndDelete(id);
    }
}
