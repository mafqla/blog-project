import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { RedisInstance } from 'config/redis'
import { getIp } from 'src/core/utils/ipUtils'
import {
  verifyNickName,
  verifyPassword,
  verifyUserName
} from 'src/core/utils/verify'
import { UserInfoService } from '../user-info/user-info.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './model/user.model'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User,
    private readonly userInfoService: UserInfoService
  ) {}

  /**
   *查询是否有该用户
   * @param username 用户名
   * @returns users
   */
  async findOne(username: string): Promise<User | undefined> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          username: username
        }
      })
      const data: any = {
        id: user.id,
        userInfoId: user.userInfoId,
        roleType: user.roleType,
        username: user.username,
        password: user.password
      }

      return data
    } catch (error) {
      console.error(error)
      return void 0
    }
  }

  /**
   *账号密码注册
   * @param createUser
   * @returns
   */
  async register(createUser: CreateUserDto) {
    const { username, nickname, password, confirmPassword, code } = createUser
    console.log(username, nickname, password, confirmPassword)
    // 获取ip地址
    const getIpContent = await getIp()
    const { cip, cid, cname } = getIpContent

    console.log(cip, cid, cname)

    // 验证用户名
    if (!verifyUserName(username)) {
      return false
    }
    //昵称检验
    if (!verifyNickName(nickname)) {
      return false
    }

    // 密码验证
    if (!verifyPassword(password, confirmPassword)) {
      return false
    }

    // 查询用户是否存在
    const isUser = await this.findOne(username)

    if (isUser) {
      throw new HttpException('用户名重复', HttpStatus.BAD_REQUEST)
    }

    // 查询用户呢称是否存在
    const isNickName = await this.userInfoService.isNickNameExist(nickname)
    if (isNickName) {
      // console.log(isNickName)
      throw new HttpException('昵称重复', HttpStatus.BAD_REQUEST)
    }
    // 验证码验证
    // 获取 redis 里缓存的 code
    const redis = await RedisInstance.initRedis('TokenGuard.canActivate', 0)
    const key = `${code}`
    console.log(key)
    const cache = await redis.get(key)
    if (code !== cache) {
      // 如果 code 不匹配，返回错误
      throw new HttpException('验证码错误', HttpStatus.BAD_REQUEST)
    }
    // 添加用户信息
    const createUserInfoDto = {
      email: username,
      nickname: nickname
    }
    const addUser = await this.userInfoService.create(createUserInfoDto)
    //返回用户信息id
    const userInfoId = addUser.id

    // 添加用户
    await this.userRepository.create({
      userInfoId: userInfoId,
      username: username,
      password: password,
      lastIp: cip,
      lastLocation: cname
    })
    return {
      message: '注册成功'
    }
  }

  // /**
  //  *获取用户信息
  //  * @param userId
  //  * @returns
  //  */
  // async getUserInfo(userId: string) {
  //   const result = await this.userRepository.findOne({
  //     where: { id: userId }
  //   })

  //   if (!result) {
  //     throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST)
  //   }
  //   return result
  // }

  async getUserInfo(id: string) {
    // const ip = vistor.ip
    // const ua = vistor.ua
    // const origin = vistor.origin
    // const referer = vistor.referer
    // console.log(ip, ua, origin, referer)

    const result = await this.userRepository.findOne({
      attributes: ['id', 'username', 'roleType'],
      where: { id: id }
    })

    if (!result) {
      throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST)
    }
    return {
      data: result,
      message: '获取用户信息成功'
    }
  }
}
