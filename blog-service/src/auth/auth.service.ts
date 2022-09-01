import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // async validateUser(username: string, pass: string): Promise<any> {
  //   //   const user = await this.usersService.register(username)
  //   //   if (user && user.password === pass) {
  //   //     const { password, ...result } = user
  //   //     return result
  //   //   }
  //   //   return null
  // }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
