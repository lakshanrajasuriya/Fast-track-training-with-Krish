import { Injectable } from '@nestjs/common';
import { OwnerCreateDto } from 'src/dto/OwnerCreate.dto';
import { OwnerRepository } from './owner.repository';

@Injectable()
export class OwnersService {
    constructor(private ownerRepository: OwnerRepository) { }

    findAll() {
        return this.ownerRepository.findAll();
    }

    createOwner(ownerCreateDto: OwnerCreateDto) {
        this.ownerRepository.create(ownerCreateDto);
    }

    findAndDelete(id: string) {
        return this.ownerRepository.findAndDelete(id);
    }

    updateOwner(id: string, ownerCreateDto: OwnerCreateDto) {
        this.ownerRepository.update(id, ownerCreateDto);
    }
}
