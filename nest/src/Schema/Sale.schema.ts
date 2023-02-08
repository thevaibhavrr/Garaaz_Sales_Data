import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({ timestamps: true, collection: "SaleData" })
export class Sale {
  @Prop({ required: true, default: Date.now() })
  date: Date;
  @Prop({ required: true })
  brand: string;
  @Prop({ required: true, enum: ["Trading", "Facilitation"] })
  transactionType: string;
  @Prop({ required: true, default: "Trading" })
  totalOrders: number;
  @Prop({ required: true })
  totalOrderValue: number;
  @Prop({ required: true })
  grossMarginPercentage: number;
  @Prop({ required: true, default: Date.now() })
  createdAt: Date;
  @Prop({ required: true, default: Date.now() })
  updatedAt: Date;
}

export type UserDocument = Sale & Document;
const schema = SchemaFactory.createForClass(Sale);
export const SaleSchema = schema;
