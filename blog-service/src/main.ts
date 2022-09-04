import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AllExceptionsFilter } from './core/filter/all-exception.filter'
import { HttpExceptionFilter } from './core/filter/http-exception.filter'
import { TransformInterceptor } from './core/interceptor/transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // 全局路由前缀
  app.setGlobalPrefix('api')
  // 注册全局错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalFilters(new AllExceptionsFilter())
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor())

  await app.listen(4000)
}
bootstrap()
