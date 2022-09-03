import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/guards/auth.guard'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configuration from 'config/configuration'
// module
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserInfoModule } from './user-info/user-info.module'
import { UsersModule } from './users/users.module'
import { RoleModule } from './role/role.module'
import { ChatModule } from './chat/chat.module'
import { AuthModule } from './auth/auth.module'
import { EmailModule } from './email/email.module'
import { AticleModule } from './aticle/aticle.module'
import { CommentModule } from './comment/comment.module'
import { TagModule } from './tag/tag.module'
import { CategoryModule } from './category/category.module'
import { ArchiveModule } from './archive/archive.module'
import { PhotoModule } from './photo/photo.module'
import { OptionLogModule } from './option_log/option_log.module'
import { MenuModule } from './menu/menu.module'
import { RoleMenuModule } from './role_menu/role_menu.module'
import { PageModule } from './page/page.module'

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
