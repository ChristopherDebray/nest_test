import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
  }

  @Get(':id')
  findById(@Param('id') id: number): string {
    return `This action returns a user with the id ${id}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'This returns a new User';
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): string {
    return `Modified this id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: number): string {
    return `Delete the user ${id}`;
  }
}
