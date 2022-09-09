import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp() // 获取请求上下文
    const response = ctx.getResponse() // 获取请求上下文中的 response对象
    const status = exception.getStatus() // 获取异常状态码

    const request = ctx.getRequest() // 获取请求上下文中的 request对象
    const exceptionRes: any = exception.getResponse() // 获取异常响应体
    let error = exception.message // 获取异常响应体中的 error字段
    let message = exceptionRes.message // 获取异常响应体中的 message字段

    if (status === 401) {
      message = '身份过期，请重新登录'
    } else if (status === 403) {
      message = '没有权限'
    } else if (status === 404) {
      message = '请求资源不存在'
    } else if (status === 500) {
      message = '服务器内部错误'
      error = 'Internal Server Error'
    }
    // 设置错误响应体
    const errorResponse = {
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error,
      message: message
    }
    // 打印错误日志
    const logFormat = ` 
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Request original url: ${request.originalUrl}
    Method: ${request.method}
    IP: ${request.ip}
    Status code: ${status}
    Response: ${exception} \n  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    `
    Logger.error(logFormat)
    // 设置返回的状态码， 请求头，发送错误信息
    response.status(status)
    response.header('Content-Type', 'application/json; charset=utf-8')
    response.send(errorResponse)
  }
}
