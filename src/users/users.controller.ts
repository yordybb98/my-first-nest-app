import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get('/')
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('/')
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
}
