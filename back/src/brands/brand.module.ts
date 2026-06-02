import { Module } from '@nestjs/common';
import { BrandsService } from './brand.service';
import { BrandsController } from './brand.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService, PrismaService],
})
export class BrandsModule {}