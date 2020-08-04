import { IsString, MaxLength, IsNotEmpty, MinLength } from "class-validator";

export class WalletCreateDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(5)
  coin: string;
}