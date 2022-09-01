// 获取IP地址

import * as requestIp from '@supercharge/request-ip'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import axios from 'axios'
export const RealIP = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    //获取设备
    const device = request.headers['user-agent']
    console.log(device)
    //获取ip地址
    const ip = requestIp.getClientIp(request)
    console.log(ip)

    return requestIp.getClientIp(request)
  }
)

export const RealIp = RealIP

// 获取IP地址
export const getIp = async () => {
  const ip = await axios.get('http://pv.sohu.com/cityjson?ie=utf-8', {
    responseType: 'blob'
  })
  const returnCitySN = ip.data

  const cip = returnCitySN.cip
  const cid = returnCitySN.returnCitySN.cid
  const cname = returnCitySN.returnCitySN.cname

  console.log(cip, cid, cname)
  return {
    cip,
    cid,
    cname
  }
}

// 解析ip地址
export const parseIp = async (ipAddress: string) => {
  try {
    const url = `http://opendata.baidu.com/api.php?query="${ipAddress}"&co=&resource_id=6006&oe=utf8`
    // 使用url调用百度api
    const res = await axios.get(url)
    // 获取返回的数据
    const data = res.data
    // 获取返回的数据中的location
    const location = data.data[0].location
    console.log(location)

    // 返回location
    return location
  } catch (e) {
    return '解析失败'
  }
}
