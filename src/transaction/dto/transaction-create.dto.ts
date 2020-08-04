import { IsString, MaxLength, IsNotEmpty, MinLength } from "class-validator";

export class TransactionCreateDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(5)
  coin: string;

  @IsNotEmpty()
  @IsString()
  addressFrom: string;

  @IsNotEmpty()
  @IsString()
  addressTo: string;

  @IsNotEmpty()
  @IsString()
  amountCoins: string;
}