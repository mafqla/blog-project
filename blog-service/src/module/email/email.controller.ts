import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { Public } from 'src/core/decorators/auth.decorator'
import { EmailService } from './email.service'
import { ThrottlerGuard, Throttle } from '@nestjs/throttler'

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  /**
   * @description: 发送邮件
   * @UseGuards(ThrottlerGuard) 限流
   * @Throttle(1, 60) 1分钟内只能发送一次
   */
  @Public()
  @Post('/sendCode')
  @UseGuards(ThrottlerGuard)
  //@Throttle(limit: number = 30, ttl: number = 60)
  @Throttle(1, 60)
  async sendEmailCode(@Body() data) {
    return this.emailService.sendEmailCode(data)
  }
}
