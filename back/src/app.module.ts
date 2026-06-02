import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BrandsModule } from './brands/brand.module';

@Module({
  imports: [UsersModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}