import {
  Body,
  Controller,
  Get,
  Ip,
  Param,
  Post,
  Query,
  Request
} from '@nestjs/common'
import { Public } from 'src/auth/auth.decorator'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto)
  // }
  @Public()
  @Get('info')
  findOne(@Query('username') username: string) {
    return this.usersService.findOne(username)
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id)
  // }
}
