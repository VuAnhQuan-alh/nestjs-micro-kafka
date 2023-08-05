import { CreateUserDto } from '@nest-nx/shared/dto';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from '@nest-nx/shared/entities';

@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto) {
    return this.usersRepository.save(data);
  }
  getUser(id: number): User {
    return this.usersRepository.findOne(id);
  }
}
