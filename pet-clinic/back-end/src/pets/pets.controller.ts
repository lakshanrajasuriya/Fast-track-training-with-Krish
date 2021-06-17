import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetCreateDto } from 'src/dto/PetCreate.dto';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
    constructor(private petsService: PetsService) { }

    @Get()
    getAllPets() {
        return this.petsService.findAll();
    }

    @Get('/:id')
    getPetById(@Param('id') id: string) {
        return this.petsService.findById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createPet(@Body() petCreateDto: PetCreateDto) {
        return this.petsService.createPet(petCreateDto);
    }

    @Put('/:id')
    updatePet(@Body() petCreateDto: PetCreateDto, @Param('id') id: string) {
        return this.petsService.updatePet(id, petCreateDto);
    }

    @Delete('/:id')
    @HttpCode(204)
    deletePet(@Param('id') id: string) {
        return this.petsService.findAndDelete(id);
    }
}
