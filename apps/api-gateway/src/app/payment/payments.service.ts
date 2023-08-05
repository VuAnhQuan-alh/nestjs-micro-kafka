import { MakePaymentDto } from '@nest-nx/shared/dto';
import { ClientKafka } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientKafka
  ) {}

  makePayment(data: MakePaymentDto) {
    this.paymentClient.emit('process_payment', JSON.stringify(data));
  }
}
