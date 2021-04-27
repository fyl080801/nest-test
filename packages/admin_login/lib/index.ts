import { Module, OnModuleInit } from '@nestjs/common';
import { HomeController } from './controller/home';
import { StaticService, ViteServiceModule } from '@seed/vite_service';

@Module({
  imports: [ViteServiceModule],
  controllers: [HomeController],
})
export class AdminLoginModule implements OnModuleInit {
  constructor(private readonly staticService: StaticService) {}

  onModuleInit() {
    this.staticService.addStatic('admin_login', __dirname);
  }
}
