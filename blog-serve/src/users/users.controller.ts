import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { UserInfoDto } from './dto/user-info.dto'
import { UsersService } from './users.service'
// import { CreateUserDto } from './dto/create-user.dto'
// import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto)
  // }

  @Get('info')
  findOne(@Query('id') id: UserInfoDto) {
    return this.usersService.getUserInfo(id)
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
