import { IsString, IsNumber } from 'class-validator';

export class CreateClientDto{

    @IsString()
    name: string;

    @IsString()
    phone: string;

    @IsNumber()
    debt: number;

}