import { IsString, MaxLength, IsNotEmpty, MinLength, IsInt } from "class-validator";

export class TransactionGetHistoryDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(5)
  coin: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsInt()
  page: number;

  @IsNotEmpty()
  @IsInt()
  limit: number;
}