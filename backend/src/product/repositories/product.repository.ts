import { PrismaService } from '@/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}
  create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    return this.prismaService.product.create({
      data: createProductDto,
    });
  }

  findAll(): Promise<ProductEntity[]> {
    return this.prismaService.product.findMany();
  }

  findOne(id: number): Promise<ProductEntity> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    return this.prismaService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: number): Promise<ProductEntity> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }
}
