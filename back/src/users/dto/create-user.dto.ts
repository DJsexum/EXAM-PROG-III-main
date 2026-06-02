import { IsEmail, IsString, Length, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString({ message: 'El nombre debe ser texto' })
    @Length(6, 255, { message: 'El nombre debe tener entre 6 y 255 caracteres' })
    fullName!: string

    @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
    @Length(6, 255, { message: 'El correo electrónico debe tener entre 6 y 255 caracteres' })
    email!: string

    @IsString({ message: 'La contraseña debe ser texto' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password!: string
}
