import { IsNotEmpty } from "class-validator"
import { Pet } from "src/schemas/pet.schema"

export class OwnerCreateDto {
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    @IsNotEmpty()
    address: string
    @IsNotEmpty()
    city: string
    @IsNotEmpty()
    phone: string
    @IsNotEmpty()
    pets: [Pet]
}