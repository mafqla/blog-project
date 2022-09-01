import { Body, Controller, Post } from '@nestjs/common'
import { RealIP } from 'src/core/utils/ipUtils'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UsersService } from 'src/users/users.service'
import { Public } from './auth.decorator'

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Post('register')
  register(@Body() createUser: CreateUserDto) {
    return this.usersService.register(createUser)
  }
}