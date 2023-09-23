import { IsString, MaxLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MaxLength(20)
  readonly username: string;
  @IsString()
  readonly password: string;
}
