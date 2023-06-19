import { IsEmail, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty()
  token: string;
}

export class RegisterRequestDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsStrongPassword()
  pass: string;
}

export class LoginRequestDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsStrongPassword()
  pass: string;
}
