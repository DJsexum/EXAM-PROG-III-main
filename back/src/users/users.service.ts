import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    try {
      // Validar el correo electrónico
      const existingUser = await this.prismaService.user.findUnique({
        where: {
          email: createUserDto.email,
        }
      });

      if (existingUser) {
        throw new ConflictException('El correo electrónico ya está en uso');
      }

      return await this.prismaService.user.create({
        data: {
          ...createUserDto,
          password: hashSync(createUserDto.password, 10),
        }
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prismaService.user.findMany({
        orderBy: {
          fullName: 'asc',
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          id,
        }
      });

      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }

      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      }
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    try {
      if (updateUserDto.email) {
        const existingUser = await this.prismaService.user.findUnique({
          where: {
            email: updateUserDto.email,
          }
        });

        if (existingUser && existingUser.id !== id) {
          throw new ConflictException('El correo electrónico ya está en uso');
        }
      }

      return await this.prismaService.user.update({
        where: {
          id,
        },
        data: {
          ...updateUserDto,
        }
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const deleted = await this.prismaService.user.delete({
        where: {
          id,
        }
      });

      return deleted;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
