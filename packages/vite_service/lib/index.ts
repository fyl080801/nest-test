import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
  RequestMethod,
} from '@nestjs/common';
import { ViteService } from './service/vite';
import { StaticService } from './service/static';
import { ViteMiddleware } from './middleware/vite';
import { ENV, Envs } from '@seed/common';

export * from './decorators/view';

@Module({
  imports: [],
  controllers: [],
  providers: [ViteService, StaticService],
  exports: [ViteService, StaticService],
})
export class ViteServiceModule implements NestModule, OnModuleInit {
  constructor(private readonly vite: ViteService) {}

  async onModuleInit() {
    if (ENV === Envs.development) {
      await this.vite.bootstrap();
    }
  }

  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ViteMiddleware)
      .forRoutes({ path: '/*', method: RequestMethod.ALL });
  }
}

export { ViteService, StaticService };
