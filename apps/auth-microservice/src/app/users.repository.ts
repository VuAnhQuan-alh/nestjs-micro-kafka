import { User } from '@nest-nx/shared/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = [];

  save(user: User) {
    console.log(`create user ${user.name} - ${user.email}`);

    this.users.push({ ...user, id: this.users.length + 1 });
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id) || null;
  }
}
