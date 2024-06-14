// user.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto} from './dto/create-user.dto';
 import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    return this.userService.deleteUser(id);
  }

  @Get('search/:name')
  async searchUserByName(@Param('name') name: string): Promise<User[]> {
    return this.userService.searchUserByName(name);
  }
}
