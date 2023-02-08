import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/mongoose/database.module';
import { SaleModule } from './Sales/sale.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    SaleModule,
  ],
})
export class AppModule {}
