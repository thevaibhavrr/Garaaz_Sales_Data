import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "src/Schema/Sale.schema";

@Injectable()
export class SaleService {
  constructor(
    @InjectModel("Sale") private readonly SaleModel: Model<UserDocument>
  ) {}
  // add sale
  async create(creatSaleDto) {
    try {
      const sale = await this.SaleModel.create(creatSaleDto);
      return sale;
    } catch (error) {
      throw new BadRequestException (error.message);
    }
  }

  // find all sale
  async findAll() {
    const sales = await this.SaleModel.find();
    return sales;
  }

  // total Sale
  async totalordervalue() {
    const saleCount = await this.SaleModel.countDocuments();
    const sale = await this.SaleModel.find();
    var totalOrderValue = 0;
    for (var i = 0; i < saleCount; i++) {
      totalOrderValue = totalOrderValue + sale[i].totalOrderValue;
    }
    return totalOrderValue;
  }

  // total Sale
  async totalorder() {
    const saleCount = await this.SaleModel.countDocuments();
    const sale = await this.SaleModel.find();
    var totalOrder = 0;
    for (var i = 0; i < saleCount; i++) {
      totalOrder = totalOrder + sale[i].totalOrders;
    }
    return totalOrder;
  }
}
