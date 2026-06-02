import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  constructor(private prismaService: PrismaService) {}

  async create(createBrandDto: CreateBrandDto) {
    const existingBrand = await this.prismaService.brand.findUnique({
      where: {
        name: createBrandDto.name,
      },
    });

    if (existingBrand) {
      throw new ConflictException('El nombre de la marca ya existe');
    }

    return this.prismaService.brand.create({
      data: {
        ...createBrandDto,
      },
    });
  }

  async findAll() {
    return this.prismaService.brand.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const brand = await this.prismaService.brand.findUnique({
      where: {
        id,
      },
    });

    if (!brand) {
      throw new NotFoundException('Marca no encontrada');
    }

    return brand;
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const brand = await this.prismaService.brand.findUnique({
      where: {
        id,
      },
    });

    if (!brand) {
      throw new NotFoundException('Marca no encontrada');
    }

    if (updateBrandDto.name) {
      const existingBrand = await this.prismaService.brand.findUnique({
        where: {
          name: updateBrandDto.name,
        },
      });

      if (existingBrand && existingBrand.id !== id) {
        throw new ConflictException('El nombre de la marca ya existe');
      }
    }

    return this.prismaService.brand.update({
      where: {
        id,
      },
      data: {
        ...updateBrandDto,
      },
    });
  }

  async remove(id: number) {
    try {
      return await this.prismaService.brand.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (error && typeof error === 'object' && 'code' in error && (error as any).code === 'P2025') {
        throw new NotFoundException('Marca no encontrada');
      }
      throw error;
    }
  }
}