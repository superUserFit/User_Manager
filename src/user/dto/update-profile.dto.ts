import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfileDTO {
    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsNotEmpty()
    readonly username: string;

    @IsString()
    readonly role: string;
}