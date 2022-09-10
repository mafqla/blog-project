import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { RedisInstance } from 'config/redis'
import { UsersService } from '../users/users.service'
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username)

    if (!user) {
      throw new BadRequestException('用户名不正确')
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new HttpException('密码不正确', HttpStatus.BAD_REQUEST)
    }

    return user
  }

  async login(user: any) {
    const payload = {
      id: user.id,
      userInfoId: user.userInfoId,
      roleType: user.roleType,
      username: user.username
    }
    const token = this.jwtService.sign(payload)
    // 实例化 redis
    const redis = await RedisInstance.initRedis('auth.certificate', 0)
    // 将用户信息和 token 存入 redis，并设置失效时间，语法：[key, seconds, value]
    await redis.setex(`${user.id}-${user.username}`, 86400000, `${token}`)
    return {
      data: {
        token
      },
      message: '登录成功'
    }
  }
}
