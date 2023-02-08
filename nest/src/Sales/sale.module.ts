import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleSchema } from 'src/Schema/Sale.schema';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }])],
  providers: [SaleService],
  controllers: [SaleController],
  exports: [MongooseModule, SaleService],
})
export class SaleModule {}
