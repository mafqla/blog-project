import { MailerModule } from '@nestjs-modules/mailer'
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter'
// import path from 'path'
import { join } from 'path'
import { Module } from '@nestjs/common'
import { EmailService } from './email.service'
import { EmailController } from './email.controller'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.qq.com', //邮箱服务器地址
        port: 587, //服务器端口 默认 465
        auth: {
          user: 'sendmail_post@qq.com', //你的邮箱地址
          pass: 'aepsgqiqppfqeacg'
        }
      },
      preview: false, //是否开启预览，开启了这个属性，在调试模式下会自动打开一个网页，预览邮件
      defaults: {
        from: '寻觅博客注册 <sendmail_post@qq.com>' //发送人 你的邮箱地址
      },
      template: {
        dir: join(process.cwd(), './src/email/email-template'), //这里就是你的ejs模板文件夹路径
        adapter: new EjsAdapter(),
        options: {
          strict: true //严格模式
        }
      }
    })
  ],
  providers: [EmailService],
  controllers: [EmailController],
  exports: [EmailService]
})
export class EmailModule {}
