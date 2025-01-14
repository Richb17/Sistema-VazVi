import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto{
    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    stock: number;

    @IsNumber()
    categoryId: number;

    @IsNumber()
    brandId: number;

    @IsNumber()
    @IsOptional()
    is_active: boolean;
}