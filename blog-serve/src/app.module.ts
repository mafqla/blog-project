import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module'
import { RoleModule } from './role/role.module'
import { ChatModule } from './chat/chat.module'
import { AuthModule } from './auth/auth.module'
import { UserInfoModule } from './user-info/user-info.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/guards/auth.guard'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'blog-service-data',
      timezone: '+08:00',
      dialectOptions: {
        dateStrings: true,
        typeCast: true
      },
      //自动导入实体
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    RoleModule,
    ChatModule,
    AuthModule,
    UserInfoModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
