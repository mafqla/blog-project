import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserInfoDto } from './dto/create-user-info.dto'
import { UpdateUserInfoDto } from './dto/update-user-info.dto'
import { UserInfo } from './model/user-info.model'

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo)
    private readonly userInfoRepository: typeof UserInfo
  ) {}

  async isNickNameExist(nickname: string) {
    const userInfo = await this.userInfoRepository.findOne({
      where: {
        nickname: nickname
      }
    })

    return userInfo
  }

  async create(createUserInfoDto: CreateUserInfoDto) {
    const { email, nickname, phone, address } = createUserInfoDto
    // 新增用户信息
    const addUserInfo = await this.userInfoRepository.create({
      email: email,
      nickname: nickname,
      phone: phone,
      address: address
    })
    return addUserInfo
  }

  findAll() {
    return `This action returns all userInfo`
  }

  findOne(id: number) {
    return `This action returns a #${id} userInfo`
  }

  update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return `This action updates a #${id} userInfo`
  }

  remove(id: number) {
    return `This action removes a #${id} userInfo`
  }
}
