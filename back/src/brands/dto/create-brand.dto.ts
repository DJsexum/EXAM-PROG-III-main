import { IsString, Length } from 'class-validator';

export class CreateBrandDto {
  @IsString({ message: 'El nombre de la marca debe ser texto' })
  @Length(1, 255, { message: 'El nombre de la marca debe tener entre 1 y 255 caracteres' })
  name!: string;
}
