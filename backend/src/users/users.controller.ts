import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUser(Number(id));
  }

  @Get()
  async users(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post()
  async createUser(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    return this.usersService.createUser(userData);
  }
}
