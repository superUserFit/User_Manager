import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class SignUpRequest {
    @IsNotEmpty()
    readonly firstName: string

    @IsNotEmpty()
    readonly lastName: string

    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsString()
    readonly role: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter the correct email.' })
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password: string;
}