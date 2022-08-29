import { Module } from '@nestjs/common'
import { UserInfoService } from './user-info.service'
import { UserInfoController } from './user-info.controller'
import { UserInfo } from './model/user-info.model'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
  imports: [SequelizeModule.forFeature([UserInfo])],
  controllers: [UserInfoController],
  providers: [UserInfoService]
})
export class UserInfoModule {}
