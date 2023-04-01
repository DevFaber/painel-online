import { Module } from '@nestjs/common';
import { HealthCheckController } from './http/healthCheck/healthCheck.controller';
import { HealthCheckService } from './http/healthCheck/healthCheck.service';

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class AppModule {}
