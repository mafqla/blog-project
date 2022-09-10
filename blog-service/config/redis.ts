// import { ConfigService } from '@nestjs/config'
// import Redis from 'ioredis'

// const redisIndex = [] // 用于记录 redis 实例索引
// const redisList = [] // 用于存储 redis 实例

// export class RedisInstance {
//   static config: ConfigService
//   static async initRedis(method: string, db = 0) {
//     const redisCofig = this.config.get('redis')
//     const isExist = redisIndex.some((x) => x === db)

//     if (!isExist) {
//       redisList[db] = new Redis({
//         port: redisCofig.port,
//         host: redisCofig.host,
//         password: redisCofig.password,
//         db
//       })
//       redisIndex.push(db)
//     }
//     return redisList[db]
//   }
// }

import { Logger } from '@nestjs/common'
import Redis from 'ioredis'
import redis from 'config/configuration'

let n = 0
const redisIndex = [] // 用于记录 redis 实例索引
const redisList = [] // 用于存储 redis 实例

export class RedisInstance {
  static async initRedis(method: string, db = 0) {
    const isExist = redisIndex.some((x) => x === db)
    if (!isExist) {
      Logger.debug(
        `[Redis ${db}]来自 ${method} 方法调用, Redis 实例化了 ${++n} 次 `
      )
      redisList[db] = new Redis({ ...redis, db })
      redisIndex.push(db)
    } else {
      Logger.debug(`[Redis ${db}]来自 ${method} 方法调用`)
    }
    return redisList[db]
  }
}
