import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AllExceptionsFilter } from './core/filter/all-exception.filter'
import { HttpExceptionFilter } from './core/filter/http-exception.filter'
import { TransformInterceptor } from './core/interceptor/transform.interceptor'
import { ValidationPipe } from './core/pipe/validation.pipe'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // 全局路由前缀
  app.setGlobalPrefix('api')
  // 注册全局错误的过滤器
  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalFilters(new HttpExceptionFilter())
  //管道验证
  app.useGlobalPipes(new ValidationPipe())
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor())

  await app.listen(4000)
}
bootstrap()
