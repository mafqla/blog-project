import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './model/user.model'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User
  ) {}

  // 根据用户名查询用户是否存在
  async getUsersByUserName(userName: string) {
    try {
      const users = await this.userRepository.findAll<User>({
        where: {
          userName: userName
        }
      })
      if (users) {
        return {
          code: 200,
          data: users,
          message: '查询成功'
        }
      }
    } catch (err) {
      return {
        code: 404,
        data: err,
        message: '用户不存在'
      }
    }
  }
}
