import { Product } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class ProductEntity implements Product {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(64)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
