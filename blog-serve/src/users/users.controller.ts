import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors
} from '@nestjs/common'
import { Public } from 'src/auth/auth.decorator'
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
  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('info')
  findOne(@Query('id') id: string) {
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
