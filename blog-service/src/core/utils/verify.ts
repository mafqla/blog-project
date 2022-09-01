import { HttpException, HttpStatus } from '@nestjs/common'

/**
 * 邮箱验证
 * @param username 用户名(邮箱)
 * @returns true:合法 false:不合法
 */
export const verifyUserName = (username: string) => {
  if (!username) {
    throw new HttpException('邮箱不能为空', HttpStatus.BAD_REQUEST)
  }
  // 邮箱验证:只能以@gmail.com、@qq.com、@163.com、@outlook.com结尾
  if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(username)) {
    throw new HttpException(
      '邮箱格式不正确:只能是主流邮箱',
      HttpStatus.BAD_REQUEST
    )
  }
  // if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(username)) {
  //   throw new HttpException('邮箱格式不正确', HttpStatus.BAD_REQUEST)
  // }
  return true
}
/**
 *用户名验证
 * @param nickname 用户名
 * @returns true or false
 */
export const verifyNickName = (nickname: string): boolean => {
  if (!nickname) {
    throw new HttpException('昵称不能为空', HttpStatus.BAD_REQUEST)
  }
  // 字母开头，允许4-16字节，允许字母数字下划线
  if (!/^[a-zA-Z]\w{3,15}$/.test(nickname)) {
    throw new HttpException('昵称格式错误', HttpStatus.BAD_REQUEST)
  }

  return true
}

/**
 * 验证密码格式
 * @param password 密码
 * @param confirmPassword 确认密码
 * @returns true||false
 */
export const verifyPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  // 密码不能为空
  if (!password) {
    throw new HttpException('密码不能为空', HttpStatus.BAD_REQUEST)
  }
  if (!confirmPassword) {
    throw new HttpException('确认密码不能为空', HttpStatus.BAD_REQUEST)
  }
  if (password !== confirmPassword) {
    throw new HttpException('两次密码不一致', HttpStatus.BAD_REQUEST)
  }
  // 密码格式
  if (
    !/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?,.])\S*$/.test(
      password
    )
  ) {
    throw new HttpException(
      '密码错误: 最少6位,包括至少1个大写字母,1个小写字母,1个数字,1个特殊字符',
      HttpStatus.BAD_REQUEST
    )
  }

  return true
}
