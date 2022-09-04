import { ConfigService } from '@nestjs/config'
import Redis from 'ioredis'

const redisIndex = [] // 用于记录 redis 实例索引
const redisList = [] // 用于存储 redis 实例

export class RedisInstance {
  static ConfigService: ConfigService
  static async initRedis(method: string, db = 0) {
    const redisCofig = this.ConfigService.get('redis')
    const isExist = redisIndex.some((x) => x === db)

    if (!isExist) {
      redisList[db] = new Redis({
        port: redisCofig.port,
        host: redisCofig.host,
        password: redisCofig.password,
        db
      })
      redisIndex.push(db)
    }
    return redisList[db]
  }
}
