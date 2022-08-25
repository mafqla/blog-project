import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from './dto/create-user.dto'
import { UserInfoDto } from './dto/user-info.dto'
import { User } from './model/user.model'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User
  ) {}

  /**
   *账号密码注册
   * @param createUser
   * @returns
   */
  async register(createUser: CreateUserDto) {
    const { username } = createUser

    const user = await this.userRepository.findOne({
      where: { username: username }
    })
    if (user) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST)
    }
    const newuser = await this.userRepository.create({
      username: createUser.username,
      password: createUser.password
    })

    return newuser
  }

  /**
   *获取用户信息
   * @param userInfo
   * @returns
   */
  async getUserInfo(userInfo: UserInfoDto) {
    const result = await this.userRepository.findOne({
      where: { id: userInfo }
    })

    return result
  }
}
