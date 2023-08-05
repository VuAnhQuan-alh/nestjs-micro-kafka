import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@nest-nx/shared/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSerVice: AuthService) {}

  @Post('sign-up')
  createUser(@Body(ValidationPipe) body: CreateUserDto) {
    return this.authSerVice.createUser(body);
  }
}
