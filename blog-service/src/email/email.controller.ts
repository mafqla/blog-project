import { Body, Controller, Post } from '@nestjs/common'
import { Public } from 'src/auth/auth.decorator'
import { EmailService } from './email.service'

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Public()
  @Post('/sendCode')
  async sendEmailCode(@Body() data) {
    return this.emailService.sendEmailCode(data)
  }
}
