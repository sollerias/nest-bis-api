import { IsString, MaxLength, IsNotEmpty, MinLength } from "class-validator";

export class WalletImportDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(5)
  coin: string;

  @IsNotEmpty()
  @IsString()
  privKey: string;
}