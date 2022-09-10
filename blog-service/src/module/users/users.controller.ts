import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { Public } from 'src/core/decorators/auth.decorator'
import { RbacGuard } from '../auth/guards/rbac.guard'
import { UsersService } from './users.service'
import { roleConstans as roleType } from '../auth/constants'

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
  @UseGuards(new RbacGuard(roleType.TEST))
  findOne2(@Query('id') id: string) {
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
