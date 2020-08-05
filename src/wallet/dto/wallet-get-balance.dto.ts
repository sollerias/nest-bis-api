import { IsString, MaxLength, IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class WalletGetBalanceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(5)
  coin: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;
}