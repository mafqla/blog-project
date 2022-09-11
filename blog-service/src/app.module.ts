import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './module/auth/guards/auth.guard'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configuration from 'config/configuration'
import { ThrottlerModule } from '@nestjs/throttler'
// module
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { RoleMenuModule } from './module/role_menu/role_menu.module'
import { PageModule } from './module/page/page.module'
import { MenuModule } from './module/menu/menu.module'
import { OptionLogModule } from './module/option_log/option_log.module'
import { PhotoModule } from './module/photo/photo.module'
import { ArchiveModule } from './module/archive/archive.module'
import { CategoryModule } from './module/category/category.module'
import { TagModule } from './module/tag/tag.module'
import { CommentModule } from './module/comment/comment.module'
import { AticleModule } from './module/aticle/aticle.module'
import { EmailModule } from './module/email/email.module'
import { UserInfoModule } from './module/user-info/user-info.module'
import { AuthModule } from './module/auth/auth.module'
import { ChatModule } from './module/chat/chat.module'
import { RoleModule } from './module/role/role.module'
import { UsersModule } from './module/users/users.module'
@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env.development', '.env.production'],
      load: [configuration]
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => config.get('database'),
      inject: [ConfigService]
    }),
    UsersModule,
    RoleModule,
    ChatModule,
    AuthModule,
    UserInfoModule,
    EmailModule,
    AticleModule,
    CommentModule,
    TagModule,
    CategoryModule,
    ArchiveModule,
    PhotoModule,
    OptionLogModule,
    MenuModule,
    RoleMenuModule,
    PageModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
