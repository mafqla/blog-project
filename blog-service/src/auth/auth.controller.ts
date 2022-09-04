import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UsersService } from 'src/users/users.service'
import { Public } from '../core/decorators/auth.decorator'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Public()
  @Post('login')
  async login(@Body() loginParams: any) {
    const authResult = await this.authService.validateUser(
      loginParams.username,
      loginParams.password
    )
    return this.authService.login(authResult)
  }

  @Public()
  @Post('register')
  async register(@Body() createUser: CreateUserDto) {
    return await this.usersService.register(createUser)
  }
}
