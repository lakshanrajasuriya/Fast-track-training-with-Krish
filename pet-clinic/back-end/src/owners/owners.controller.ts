import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { OwnerCreateDto } from 'src/dto/OwnerCreate.dto';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {
    constructor(private ownersService: OwnersService) { }

    @Get()
    getAllOwners() {
        return this.ownersService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createOwner(@Body() ownerCreateDto: OwnerCreateDto) {
        return this.ownersService.createOwner(ownerCreateDto);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteOwner(@Param('id') id: string) {
        return this.ownersService.findAndDelete(id);
    }

    @Put('/:id')
    updateOwner(@Body() ownerCreateDto: OwnerCreateDto, @Param('id') id: string) {
        return this.ownersService.updateOwner(id, ownerCreateDto);
    }
}
