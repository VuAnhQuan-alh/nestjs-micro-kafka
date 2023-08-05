import { User } from '@nest-nx/shared/entities';
import { MakePaymentDto } from '@nest-nx/shared/dto';
import { ClientKafka } from '@nestjs/microservices';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka
  ) {}

  processPayment(data: MakePaymentDto) {
    const { userId, amount } = data;

    console.log('process payment');
    this.authClient
      .send('get_user', JSON.stringify({ userId }))
      .subscribe((user: User) => {
        console.log(
          `process payment for user ${user.name} - amount: ${amount}`
        );
      });
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
