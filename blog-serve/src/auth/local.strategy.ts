import { IStrategyOptions, Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { BadRequestException, Injectable } from '@nestjs/common'
import { compareSync } from 'bcrypt'
import { InjectModel } from '@nestjs/sequelize'
import { User } from 'src/users/model/user.model'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password'
    } as IStrategyOptions)
  }

  async validate(username: string, password: string): Promise<any> {
    // const user = await this.userRepository
    // if (!user) {
    //   throw new BadRequestException('用户名不正确！')
    // }
    // if (!compareSync(password, user.password)) {
    //   throw new BadRequestException('密码错误！')
    // }
    // return user
  }
}
