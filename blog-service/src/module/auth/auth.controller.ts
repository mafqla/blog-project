import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { Public } from 'src/core/decorators/auth.decorator'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UsersService } from '../users/users.service'
import { AuthService } from './auth.service'
import { RbacGuard } from './guards/rbac.guard'
import { roleConstans as roleType } from './constants'

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
