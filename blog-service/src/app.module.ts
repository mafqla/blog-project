import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserInfoModule } from './user-info/user-info.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/guards/auth.guard'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { RoleModule } from './role/role.module'
import { ChatModule } from './chat/chat.module'
import { AuthModule } from './auth/auth.module'
import { EmailModule } from './email/email.module';
import configuration from 'config/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env.development', '.env.production'],
      load: [configuration]
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const database = configService.get('database')
        return {
          dialect: 'mysql',
          host: database.host,
          port: database.port,
          username: database.username,
          password: database.password,
          database: database.database,
          timezone: '+08:00',
          dialectOptions: {
            dateStrings: true,
            typeCast: true
          },
          //自动导入实体
          autoLoadModels: true,
          synchronize: true
        }
      },
      inject: [ConfigService]
    }),
    UsersModule,
    RoleModule,
    ChatModule,
    AuthModule,
    UserInfoModule,
    EmailModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
