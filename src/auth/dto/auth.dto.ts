import { IsNotEmpty } from 'class-validator';

export class AuthDto {
  readonly name: string;
  readonly password: string;
};