import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PaymentService } from './payments.service';
import { MakePaymentDto } from '@nest-nx/shared/dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pay')
  makePayment(@Body(ValidationPipe) body: MakePaymentDto) {
    return this.paymentService.makePayment(body);
  }
}
