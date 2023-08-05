import { IsNotEmpty, IsNumber } from 'class-validator';

export class MakePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
