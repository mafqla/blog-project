import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request
} from '@nestjs/common'
import { Public } from 'src/core/decorators/auth.decorator'
import {
  QueryParams,
  QueryParamsResult
} from 'src/core/decorators/queryparams.decorator'
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

  @Get('test')
  findOne2(
    @Param('id') id: string,
    @QueryParams() { visitor }: QueryParamsResult
  ) {
    return this.usersService.getUserInfo(id, visitor)
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
