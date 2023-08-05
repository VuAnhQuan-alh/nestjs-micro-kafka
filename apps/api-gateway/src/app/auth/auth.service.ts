import { ClientKafka } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@nest-nx/shared/dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka
  ) {}

  createUser(data: CreateUserDto) {
    this.authClient.emit('create_user', JSON.stringify(data));
  }
}
